import React from "react"
import SiteLayout from "../components/SiteLayout"
import { graphql } from "gatsby"
import PostEntry from "../components/PostEntry"
import Seo from "../components/Seo"

const CampaignTemplate = props => {
  const {
    location,
    data: {
      wpgraphql: { campaign },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${campaign.name}`} />
      <div type="flex" gutter={24}>
        <div xs={24} md={16}>
          <h1>Campaign: {campaign.name}</h1>
          {campaign.posts.nodes &&
            campaign.posts.nodes.map(post => <PostEntry post={post} />)}
        </div>
      </div>
    </SiteLayout>
  )
}

export default CampaignTemplate

export const pageQuery = graphql`
  query GET_CAMPAIGN($id: ID!) {
    wpgraphql {
      campaign(id: $id) {
        id
        name
        slug
        campaignsTaxonomyFields {
          featureColor
          featureIcon {
            sourceUrl
            srcSet(size: THUMBNAIL)
            altText
          }
        }
        posts(first: 100) {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`
