import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import moment from "moment/moment"

import config from "../../../config"
import { createLocalLink } from "../../utils"

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
            excerpt
            date
            tags {
              nodes {
                slug
                name
              }
            }
            featuredImage {
              altText
              srcSet(size: POST_THUMBNAIL)
            }
          }
        }
      }
    }
  `)

  const { title = "Recent Posts" } = props

  return (
    <section className="py-4" style={props.style}>
      <div className="container">
        <div className="mb-5">
          <h2 className={`text-center text-md-right ${RPWstyle.widgetTitle}`}>
            {title}
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
                    alt={post.featuredImage.altText}
                  />
                </Link>

                <header className={`p-3 entry-header ${RPWstyle.entryHeader}`}>
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
          <Link className="btn btn-outline-primary" to={"/blog/page/1"}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

RecentPostsWidget.propTypes = propTypes

export default RecentPostsWidget
