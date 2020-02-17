import React from "react"
import moment from "moment/moment"
import { Link } from "gatsby"
import AvatarImg from "../../images/wwf-icon-32x32.png"

const PostEntryMeta = ({ post }) => (
  <div style={{ textAlign: `center`, marginBottom: `15px` }}>
    <div style={{ textAlign: `center` }}>
      <Link to={`/author/${post.author.slug}`}>
        <img
          size={100}
          src={post.author.avatar ? post.author.avatar.url : AvatarImg}
          alt={post.author.slug}
        />
      </Link>
    </div>
    <div style={{ textAlign: `center` }}>
      <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
      <br />
      {moment(post.date).format(`MMM Do YY`)}
    </div>
  </div>
)

export default PostEntryMeta
