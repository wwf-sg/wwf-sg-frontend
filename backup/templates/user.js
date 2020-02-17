import React from "react"
import SiteLayout from "../components/SiteLayout"
import { graphql } from "gatsby"
import PostEntry from "../components/PostEntry"
import Seo from "../components/Seo"

const User = props => {
  const {
    location,
    data: {
      wpgraphql: { user },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${user.name}`} />
      <section className="wwf-sg-section py-3 py-md-5">
        <div className="container">
          <div className="row my-3">
            <h1>{user.name}</h1>
          </div>
          <div className={`entry-grid mb-4 row`}>
            {user.posts.nodes &&
              user.posts.nodes.map(post => <PostEntry post={post} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default User

export const pageQuery = graphql`
  query user($id: ID!) {
    wpgraphql {
      user(id: $id) {
        name
        avatar {
          url
        }
        posts {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`
