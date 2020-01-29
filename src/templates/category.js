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
      <div type="flex" gutter={24}>
        <div xs={24} md={16}>
          <h1>Category: {category.name}</h1>
          {category.posts.nodes &&
            category.posts.nodes.map(post => <PostEntry post={post} />)}
        </div>
      </div>
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
