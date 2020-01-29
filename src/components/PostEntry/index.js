import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import PostEntryMeta from "../PostEntryMeta"
import config from "../../../config"

const PostEntry = ({ post }) => {
  return (
    <Fragment>
      <div type="flex" justify="space-around" gutter={16}>
        <div>
          <PostEntryMeta post={post} />
        </div>
        <div>
          <h2>
            <Link to={`/blog/${post.uri}`}>{post.title}</Link>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                ? post.content.replace(config.wordPressUrl, ``)
                : post.content,
            }}
          />
        </div>
      </div>
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
  }
`
