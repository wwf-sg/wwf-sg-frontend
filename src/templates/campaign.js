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
      <section className="wwf-sg-section py-3 py-md-5">
        <div className="container">
          <div className="row my-3">
            <h1>Campaign: {campaign.name}</h1>
          </div>
          <div className={`entry-grid mb-4 row`}>
            {campaign.posts.nodes &&
              campaign.posts.nodes.map(post => <PostEntry post={post} />)}
          </div>
        </div>
      </section>
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
