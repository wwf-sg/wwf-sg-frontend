/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// The “graphql” function allows us to run arbitrary
	// queries against the local Gatsby GraphQL schema. Think of
	// it like the site has a built-in database constructed
	// from the fetched data that you can run queries against.

	const result = await graphql(`
	query {
		wpgraphql {
			posts {
				edges {
					node {
						id
						databaseId
						slug
						status
					}
				}
			}
		}
	}
	
  `)
	// Check for any errors
	if (result.errors) {
		console.error(result.errors)
	}

	// Access query results via object destructuring
	const { wpgraphql: { posts } } = result.data
	const postTemplate = path.resolve(`./src/templates/post.js`)
	// We want to create a detailed page for each
	// post node. We'll just use the WordPress Slug for the slug.
	// The Post ID is prefixed with 'POST_'
	posts.edges.forEach(edge => {
		createPage({
			path: `/blog/${edge.node.slug}/`,
			component: slash(postTemplate),
			context: {
				id: edge.node.id,
				databaseId: edge.node.databaseId
			},
		})
	})
}


// resolver for caching and optmizing WPGraphql images and for use with gatsby-images
// https://thoughtsandstuff.com/gatsby-with-wordpress-caching-downloaded-media-images-to-reduce-build-time/
exports.createResolvers = ({
	actions,
	cache,
	createNodeId,
	createResolvers,
	getNode,
	store,
	reporter
}) => {
	const { createNode, touchNode } = actions;

	// Add all media libary images so they can be queried by
	// childImageSharp
	createResolvers({
		WPGraphQL_MediaItem: {
			imageFile: {
				type: `File`,
				async resolve(source, args, context, info) {
					if (source.sourceUrl) {
						let fileNodeID;
						let fileNode;
						let sourceModified;

						// Set the file cacheID, get it (if it has already been set)
						const mediaDataCacheKey = `wordpress-media-${source.databaseId}`;
						const cacheMediaData = await cache.get(mediaDataCacheKey);

						if (source.modified) {
							sourceModified = source.modified;
						}

						// If we have cached media data and it wasn't modified, reuse
						// previously created file node to not try to redownload
						if (cacheMediaData && sourceModified === cacheMediaData.modified) {
							fileNode = getNode(cacheMediaData.fileNodeID);

							// check if node still exists in cache
							// it could be removed if image was made private
							if (fileNode) {
								fileNodeID = cacheMediaData.fileNodeID;
								// https://www.gatsbyjs.org/docs/node-creation/#freshstale-nodes
								touchNode({
									nodeId: fileNodeID
								});
							}
						}

						// If we don't have cached data, download the file
						if (!fileNodeID) {
							try {
								// Get the filenode
								fileNode = await createRemoteFileNode({
									url: source.sourceUrl,
									store,
									cache,
									createNode,
									createNodeId,
									reporter
								});

								if (fileNode) {
									fileNodeID = fileNode.id;

									await cache.set(mediaDataCacheKey, {
										fileNodeID,
										modified: sourceModified
									});
								}
							} catch (e) {
								// Ignore
								console.log(e);
								return null;
							}
						}

						if (fileNode) {
							return fileNode;
						}
					}
					return null;
				}
			}
		}
	})
};