import React from "react"
import SiteLayout from "../components/SiteLayout"
import { graphql } from "gatsby"
import PostEntry from "../components/PostEntry"
import Seo from "../components/Seo"

const TagTemplate = props => {
  const {
    location,
    data: {
      wpgraphql: { tag },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${tag.title}`} />
      <section className="wwf-sg-section py-3 py-md-5">
        <div className="container">
          <div className="row my-3">
            <h1>#{tag.name}</h1>
          </div>
          <div className={`entry-grid mb-4 row`}>
            {tag.posts.nodes &&
              tag.posts.nodes.map(post => <PostEntry post={post} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query GET_TAG($id: ID!) {
    wpgraphql {
      tag(id: $id) {
        id
        name
        slug
        posts(first: 100) {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`
