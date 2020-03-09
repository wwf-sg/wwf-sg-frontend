import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import moment from "moment/moment"

import config from "../../../../config"
import { createLocalLink } from "../../../utils"

import RPWstyle from "./style.module.scss"

export const query = graphql`

fragment AcfImage on WPGraphQL_MediaItem {
  mediaItemUrl
  sourceUrl
  modified
  databaseId
  imageFile {
    childImageSharp {
      fluid {
				...GatsbyImageSharpFluid
      }
    }
  }
}
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
						# campaignsTaxonomyFields {
						# 	featureColor
						# 	featureIcon {
						# 		...AcfImage
						# 		altText
						# 	}
						# }
					}
				}
				featuredImage {
	        ...AcfImage
					altText
				}
			}
		}
	}
}
`


const propTypes = {
	title: PropTypes.string,
}

const RecentPostsWidget = props => {
	const { wpgraphql: { posts: { nodes: blogPosts } } } = useStaticQuery(query)

	return (
		<section
			className={`wwf-sg-section ${RPWstyle.section}`}
		// style={props.style}
		>
			<div className="container">
				<div className="mb-5">
					<h2 className={`text-center ${RPWstyle.widgetTitle}`}>
					What's Hapenning
					</h2>
				</div>
				<div className={`entry-grid mb-4 ${RPWstyle.entryGrid}`}>
					{blogPosts.map(post => {
						return (
							<article className={`entry ${RPWstyle.entry}`} key={post.id}>
								<Link to={"/blog/" + createLocalLink(post.link)}>
									<Img
										className={`w-100 ${RPWstyle.entryImage}`}
										alt={post.featuredImage.altText}
										fluid={post.featuredImage.imageFile.childImageSharp.fluid} />
								</Link>
								<header className={`p-3 entry-header`}>
									<div className="campaigns-link mb-3">
										{post.campaigns.nodes.map((campaign, i) => {
											if (i > 1) return null
											return (

												<Link
													className={`entry-campaign`}
													style={{
														color:
															campaign.campaignsTaxonomyFields.featureColor,
														fontSize: "16px",
														fontWeight: 600,
														letterSpacing: "-0.7px",
													}}
													to={"/campaign/" + campaign.slug}
													key={campaign.slug}
													rel="category"
												>
													<Img
														className="mr-2"
														alt={campaign.campaignsTaxonomyFields.featureIcon.altText}
														style={{ width: "40px", float: "left" }}
														fluid={campaign.campaignsTaxonomyFields.featureIcon.imageFile.childImageSharp.fluid} />
													<span style={{ position: "relative", top: 8 }}>{campaign.name} </span>
												</Link>

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
