const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_CAMPAIGNS = `
  query GET_CAMPAIGNS($first: Int, $after: String) {
    wpgraphql {
      campaigns(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          slug
          databaseId
        }
      }
    }
  }
  `

  const { createPage } = actions
  const allCampaigns = []
  const fetchCampaigns = async variables =>
    await graphql(GET_CAMPAIGNS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          campaigns: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(campaign => {
        allCampaigns.push(campaign)
      })
      if (hasNextPage) {
        return fetchCampaigns({ first: 100, after: endCursor })
      }
      return allCampaigns
    })

  await fetchCampaigns({ first: 100, after: null }).then(allCampaigns => {
    const campaignTemplate = path.resolve(`./src/templates/campaign.js`)

    allCampaigns.map(campaign => {
      console.log(`create campaign: ${campaign.slug}`)
      createPage({
        path: `/campaign/${campaign.slug}`,
        component: campaignTemplate,
        context: campaign,
      })
    })
  })
}
