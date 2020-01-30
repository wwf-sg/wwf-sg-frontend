/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPosts = require(`./gatsby/createPosts`)
// const createUsers = require(`./gatsby/createUsers`)
// const createCampaigns = require(`./gatsby/createCategories`)
const createCategories = require(`./gatsby/createCategories`)
// const createTags = require(`./gatsby/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  // Redirections
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/blog/page/1",
    toPath: "/blog",
    isPermanent: true,
  })

  await createPosts({ actions, graphql })
  //   await createUsers({ actions, graphql })
  //   await createCampaigns({ actions, graphql })
  await createCategories({ actions, graphql })
  //   await createTags({ actions, graphql })
}
