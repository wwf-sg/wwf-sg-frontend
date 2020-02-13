import React, { Fragment } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import moment from "moment/moment"

import config from "../../../../config"
import { createLocalLink } from "../../../utils"

import RPWstyle from "./style.module.scss"

const propTypes = {
  title: PropTypes.string,
}

const RecentPostsWidget = props => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        posts(first: 4, where: { status: PUBLISH }) {
          nodes {
            id
            title
            link
            slug
            excerpt
            date
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
        }
      }
    }
  `)

  return (
    <section
      className={`wwf-sg-section ${RPWstyle.section}`}
      style={props.style}
    >
      <div className="container">
        <div className="mb-5">
          <h2 className={`text-center ${RPWstyle.widgetTitle}`}>
            {props.formFields.title.text}
          </h2>
        </div>
        <div className={`entry-grid mb-4 ${RPWstyle.entryGrid}`}>
          {data.wpgraphql.posts.nodes.map(post => {
            return (
              <article className={`entry ${RPWstyle.entry}`} key={post.id}>
                <Link to={"/blog/" + createLocalLink(post.link)}>
                  <img
                    className={`w-100 ${RPWstyle.entryImage}`}
                    srcSet={post.featuredImage.srcSet}
                    src={post.featuredImage.sourceUrl}
                    alt={post.featuredImage.altText}
                  />
                </Link>

                <header className={`p-3 entry-header ${RPWstyle.entryHeader}`}>
                  <div className="campaigns-link mb-3">
                    {post.campaigns.nodes.map((campaign, i) => {
                      if (i > 1) return null
                      return (
                        <Fragment key={campaign.slug}>
                          <Link
                            className={`entry-campaign ${RPWstyle.entryCampaign}`}
                            style={{
                              color:
                                campaign.campaignsTaxonomyFields.featureColor,
                              fontSize: "16px",
                              fontWeight: 600,
                              lineHeight: 1,
                              letterSpacing: "-0.7px",
                            }}
                            to={"/campaign/" + campaign.slug}
                            key={campaign.slug}
                            rel="category"
                          >
                            <img
                              className="mr-2"
                              style={{ maxWidth: "40px" }}
                              srcSet={
                                campaign.campaignsTaxonomyFields.featureIcon
                                  .srcSet
                              }
                              src={
                                campaign.campaignsTaxonomyFields.featureIcon
                                  .sourceUrl
                              }
                              alt={
                                campaign.campaignsTaxonomyFields.featureIcon
                                  .altText
                              }
                            />
                            {campaign.name}
                          </Link>
                        </Fragment>
                      )
                    })}
                  </div>

                  <Link to={"/blog/" + createLocalLink(post.link)}>
                    <h3
                      className={`entry-title ${RPWstyle.entryTitle}`}
                      dangerouslySetInnerHTML={{
                        __html: post.title,
                      }}
                    ></h3>
                  </Link>

                  <Link
                    className={`entry-date ${RPWstyle.entryDate}`}
                    to={"/blog/" + createLocalLink(post.link)}
                    rel="bookmark"
                  >
                    Published on {` `}
                    <time className={`published`} dateTime={post.date}>
                      {moment(post.date).format(`D MMM YYYY`)}
                    </time>
                  </Link>
                </header>

                <div
                  className={`px-3 py-2 entry-content ${RPWstyle.entryContent}`}
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt
                      ? post.excerpt.replace(config.wordPressUrl, ``)
                      : post.excerpt,
                  }}
                />

                <footer className={`p-3 entry-footer ${RPWstyle.entryFooter}`}>
                  <div className="tags-links">
                    <span className="screen-reader-text">Tags: </span>
                    {post.tags.nodes.map(tag => {
                      return (
                        <Link
                          className={`entry-tag ${RPWstyle.entryTag}`}
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
            )
          })}
        </div>
        <div className="mb-4 text-center">
          <Link className="btn btn-outline-primary" to={"/blog"}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

RecentPostsWidget.propTypes = propTypes

export default RecentPostsWidget
