import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

export const postQuery = graphql`
  query($databaseId: Int!) {
		wpgraphql {
			posts(where : {id : $databaseId}){
				edges {
					node {
						id
						databaseId
						title
						content
					}
				}
			}
		}
	}	
`

const Post = ({ data }) => {

	const { wpgraphql: { posts: { edges } } } = data
	const [{ node: post }] = edges

	return (
		<>
			<div
				// className={`px-3 py-2 entry-content `}
				style={{fontSize:34, fontWeight:500}}
				dangerouslySetInnerHTML={{
					__html: post.title
				}}
			/>
			<div
				className={`px-3 py-2 entry-content `}
				dangerouslySetInnerHTML={{
					__html: post.content
				}}
			/>
		</>
	)

}

Post.propTypes = {
	data: PropTypes.object.isRequired,
	edges: PropTypes.array,
}

export default Post
