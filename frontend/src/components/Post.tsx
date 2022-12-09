import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteSelected, FavoriteUnselected } from './icons/Like'
import { CommentIcon } from './icons/Comment'
import { ShareIcon } from './icons/Share'
import { BookmarkSelected, BookmarkUnselected } from './icons/Bookmark'

type Props = {
  isOnFeed: boolean,
  post: any,
}

const Post = ({isOnFeed, post}: Props) => {

return (
isOnFeed ? (
    <div key={post._id} className='border rounded-xl'>
      <Link to={`/profile/${post.postedBy.userName}`} className='flex gap-3 my-auto py-3 border-b pl-4'>
        <img className='w-10 h-10 rounded-full'src={post.postedBy.profilePic}/>
        <h1 className='my-auto hover:font-semibold'>{post.postedBy.userName}</h1>
      </Link>
      <div>
      <img className='w-[468px] h-[468px] object-fill border-b' src={post.photo} />
      </div>
      <div className='flex justify-between mx-4 pt-4'>
      <div className='flex'>
      <h1>Heart</h1>
      <h1>Comment</h1>
      <h1>Send</h1>
      </div>
      <div>
        <h1>Bookmark</h1>
      </div>
      </div>
      <div className='flex'>
      <h1>PFPS</h1>
      <h2>Liked by 'insert names heres'</h2>
      </div>
      <h2>{post.caption}</h2>
      <h3>Post Timestamp</h3>
      <h3>Comments will go here</h3>
    </div>
  ) : (
<div>
<div key={post._id} className='cursor-pointer hover:bg-black'>
<img className='h-[256px] w-[256px]' src={post.photo}/>
</div>
</div>
  ))

  }

export default Post