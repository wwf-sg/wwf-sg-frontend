import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import PostEntryMeta from "../components/PostEntryMeta"
import Seo from "../components/Seo"

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      <div>{term.name}</div>
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <Fragment>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null}
  </Fragment>
)

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post },
    },
  } = props
  const { content } = post
  return (
    <SiteLayout location={location}>
      <Seo title={`${post.title}`} />
      <section className="container">
        <article className={`entry pt-5`}>
          <header>
            <h1
              className={`entry-title`}
              dangerouslySetInnerHTML={{
                __html: post.title,
              }}
            ></h1>
            <PostEntryMeta post={post} />
            {post.campaigns.nodes.map((campaign, i) => {
              if (i > 1) return null
              return (
                <Fragment key={campaign.slug}>
                  <Link
                    className={`entry-campaign`}
                    style={{
                      color: campaign.campaignsTaxonomyFields.featureColor,
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.7px",
                    }}
                    to={"/campaign/" + campaign.slug}
                    rel="category"
                  >
                    <img
                      className="mr-2"
                      style={{ maxWidth: "40px" }}
                      srcSet={
                        campaign.campaignsTaxonomyFields.featureIcon.srcSet
                      }
                      src={
                        campaign.campaignsTaxonomyFields.featureIcon.sourceUrl
                      }
                      alt={campaign.campaignsTaxonomyFields.featureIcon.altText}
                    />
                    {campaign.name}
                  </Link>
                </Fragment>
              )
            })}
            <img
              className={`w-100 mb-3 entry-featured-image`}
              srcSet={post.featuredImage.srcSet}
              alt={post.featuredImage.altText}
            />
          </header>
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <footer>
            {post.categories.nodes.length || post.tags.nodes.length
              ? renderTerms(post.categories.nodes, post.tags.nodes)
              : null}
          </footer>
        </article>
      </section>
    </SiteLayout>
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        author {
          name
          slug
          avatar {
            url
          }
        }
        featuredImage {
          altText
          srcSet(size: POST_THUMBNAIL)
        }
        tags {
          nodes {
            name
            link
            slug
          }
        }
        categories {
          nodes {
            name
            link
            slug
          }
        }
        campaigns {
          nodes {
            name
            link
            slug
            campaignsTaxonomyFields {
              featureColor
              featureIcon {
                srcSet(size: THUMBNAIL)
                altText
              }
            }
          }
        }
      }
    }
  }
`
