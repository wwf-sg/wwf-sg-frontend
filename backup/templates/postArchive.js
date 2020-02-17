import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import PostEntry from "../components/PostEntry"
import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

class IndexPage extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { hasPreviousPage, pageNumber },
    } = this.props

    if (hasPreviousPage) {
      let previousLink = null

      if (!pageNumber) {
        return null
      } else if (2 === pageNumber) {
        previousLink = `/blog`
      } else if (2 < pageNumber) {
        previousLink = `/blog/page/${pageNumber - 1}`
      }

      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(previousLink)}
        >
          Previous Posts
        </button>
      )
    } else {
      return null
    }
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(`/blog/page/${pageNumber + 1}`)}
        >
          Next Posts
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      location,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``

    return (
      <SiteLayout pageNumber={pageNumber} location={{ location }}>
        <section
          className="wwf-sg-section py-3 py-md-5"
          style={this.props.style}
        >
          <div className="container">
            {!pageNumber ? (
              <div className="py-5 text-center">
                <p>No posts found</p>
              </div>
            ) : (
              <>
                <Seo title={`Blog${blogPageNumber}`} />
                <div className={`entry-grid mb-4 row`}>
                  {data &&
                    data.wpgraphql &&
                    data.wpgraphql.posts.nodes.map(post => (
                      <PostEntry key={post.id} post={post} />
                    ))}
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <div>{this.renderPreviousLink()}</div>
                    </div>
                    <div className="col text-right">
                      <div>{this.renderNextLink()}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </SiteLayout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
