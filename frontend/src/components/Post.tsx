import React from 'react'

type Props = {
  isOnFeed: boolean,
  post: any,
}

const Post = ({isOnFeed, post}: Props) => {

  return (
    <div key={post._id}>Post
      <h1>{post.caption}</h1>
      <img src={post.photo} />
    </div>
  )


}

export default Post