const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_HOMEPAGE = `
  query GET_HOMEPAGE {
    allHomePageJson(limit: 10) {
      edges {
        node {
          id
          type
        }
      }
    }
  }
  `

  const { createPage } = actions
  const allPages = []
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return allPages
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)

    allPages.map(page => {
      console.log(`create page: ${page.uri}`)
      createPage({
        path: `/${page.uri}`,
        component: pageTemplate,
        context: page,
      })
    })
  })
}
