import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import moment from "moment/moment"

import config from "../../../config"

import PEstyle from "./style.module.scss"

const PostEntry = ({ post }) => {
  return (
    <Fragment>
      <article className={`entry ${PEstyle.entry}`} key={post.id}>
        <Link to={"/blog/" + post.slug}>
          <img
            className={`w-100 ${PEstyle.entryImage}`}
            srcSet={post.featuredImage.srcSet}
            src={post.featuredImage.sourceUrl}
            alt={post.featuredImage.altText}
          />
        </Link>

        <header className={`p-3 entry-header ${PEstyle.entryHeader}`}>
          <div className="campaigns-link mb-3">
            {post.campaigns.nodes.map((campaign, i) => {
              if (i > 1) return null
              return (
                <Fragment key={campaign.slug}>
                  <Link
                    className={`entry-campaign ${PEstyle.entryCampaign}`}
                    style={{
                      color: campaign.campaignsTaxonomyFields.featureColor,
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.7px",
                    }}
                    to={"/campaigns/" + campaign.slug}
                    key={campaign.slug}
                    rel="category"
                  >
                    <img
                      className="mr-2"
                      style={{ maxWidth: "40px" }}
                      src={
                        campaign.campaignsTaxonomyFields.featureIcon.sourceUrl
                      }
                      srcSet={
                        campaign.campaignsTaxonomyFields.featureIcon.srcSet
                      }
                      alt={campaign.campaignsTaxonomyFields.featureIcon.altText}
                    />
                    {campaign.name}
                  </Link>
                </Fragment>
              )
            })}
          </div>

          <Link to={"/blog/" + post.slug}>
            <h3
              className={`entry-title ${PEstyle.entryTitle}`}
              dangerouslySetInnerHTML={{
                __html: post.title,
              }}
            ></h3>
          </Link>

          <Link
            className={`entry-date ${PEstyle.entryDate}`}
            to={"/blog/" + post.slug}
            rel="bookmark"
          >
            Published on {` `}
            <time className={`published`} dateTime={post.date}>
              {moment(post.date).format(`D MMM YYYY`)}
            </time>
          </Link>
        </header>

        <div
          className={`px-3 py-2 entry-content ${PEstyle.entryContent}`}
          dangerouslySetInnerHTML={{
            __html: post.content
              ? post.content.replace(config.wordPressUrl, ``)
              : post.content,
          }}
        />

        <footer className={`p-3 entry-footer ${PEstyle.entryFooter}`}>
          <div className="tags-links">
            <span className="screen-reader-text">Tags: </span>
            {post.tags.nodes.map(tag => {
              return (
                <Link
                  className={`entry-tag ${PEstyle.entryTag}`}
                  to={"/tags/" + tag.slug}
                  key={tag.slug}
                  rel="tag"
                >
                  #{tag.name}
                  {` `}
                </Link>
              )
            })}
          </div>
        </footer>
      </article>
    </Fragment>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
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
        slug
        campaignsTaxonomyFields {
          featureColor
          featureIcon {
            sourceUrl
            srcSet(size: THUMBNAIL)
            altText
          }
        }
      }
    }
    featuredImage {
      sourceUrl
      altText
      srcSet
    }
  }
`
