import React from "react"
import SiteLayout from "../components/SiteLayout"
import { graphql } from "gatsby"
import PostEntry from "../components/PostEntry"
import Seo from "../components/Seo"

const CategoryTemplate = props => {
  const {
    location,
    data: {
      wpgraphql: { category },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${category.name}`} />
      <section className="wwf-sg-section py-3 py-md-5">
        <div className="container">
          <div className={`entry-grid mb-4 row`}>
            <h1>Category: {category.name}</h1>
            {category.posts.nodes &&
              category.posts.nodes.map(post => <PostEntry post={post} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wpgraphql {
      category(id: $id) {
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
