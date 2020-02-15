const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($limit:Int $skip:Int) {
    allPagesJson(limit: $limit, skip: $skip) {
      pageInfo {
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
      nodes {
        id
        slug
        title
      }
    }
  }
  `

  const { createPage } = actions
  const allPages = []

	const fetchPages = async variables =>
	{

		const {
			allPagesJson: {
				pageInfo: { hasNextPage, pageCount, perPage },
				nodes,
			} = await graphql(GET_PAGES, variables)
			
			

	}

		.then(({ data }) => {
   
      } = data

      nodes.map(page => {
        allPages.push(page)
      })

      if (hasNextPage) {
        return fetchPages({ limit: variables.limit, skip: pageCount * perPage })
      }

      return allPages
    })

  await fetchPages({ limit: 10, skip: null }).then(allPages => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)

    allPages.map(page => {
      console.log(`create page: ${page.title}`)
      createPage({
        path: `/${page.slug}`,
        component: pageTemplate,
        context: page,
      })
    })
  })
}
