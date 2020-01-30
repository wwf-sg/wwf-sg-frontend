const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first: Int, $after: String) {
    wpgraphql {
      posts(first: $first, after: $after, where: {status: PUBLISH}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          uri
          title
          databaseId
          slug
          excerpt
          date
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 1
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasPreviousPage, hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.databaseId)
      const blogTemplate = path.resolve(`./src/templates/postArchive.js`)
      const blogPagePath = !variables.after
        ? `/blog`
        : `/blog/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
          hasPreviousPage: hasPreviousPage,
        },
        ids: nodeIds,
      }

      nodes.map(post => {
        allPosts.push(post)
      })

      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 10, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 10, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)
      createPage({
        path: `/blog/${post.uri}`,
        component: postTemplate,
        context: post,
      })
    })
  })
}
