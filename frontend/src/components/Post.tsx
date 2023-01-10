import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FavoriteSelected, FavoriteUnselected } from './icons/Like'
import { CommentIcon } from './icons/Comment'
import { ShareIcon } from './icons/Share'
import { BookmarkSelected, BookmarkUnselected } from './icons/Bookmark'
import dayjs from 'dayjs'
import CommentForm from './CommentForm'
import { checkIfLikedByUser, likePostToggle } from '../utils/axios/postAPIs'
import { getProfileId } from '../utils/axios/profileAPIs'
import Comments from './Comments'
import EditPostModal from './EditPostModal'

type Props = {
  isOnFeed: boolean,
  post: any,

}

const Post = ({isOnFeed, post}: Props) => {

const formattedDate = dayjs(post.createdAt).format(`MMMM D`)

const [isLiked, setIsLiked] = useState(false)
const [commentIsOpen, setCommentIsOpen] = useState(false)
const [editModalIsOpen, setEditModalIsOpen] = useState(false)

useEffect(() => {
checkIfLikedByUser(post._id).then(res => {
  setIsLiked(res)
})

}, [])

const navigate = useNavigate()


const likeList = post.likes
const likes = post.likes.map((liker: any) => {


if(likeList.length === 0){
  return (
    <h1>Be the first to like this post!</h1>
  )
}

else if(likeList.length === 1){
  return (
<span className='font-semibold cursor-pointer pl-1' onClick={() => {navigate(`/profile/${liker.userName}`)}}>{liker.userName}</span>)}


else if(likeList.length < 4){
  return (
<span className='font-semibold cursor-pointer pl-1' onClick={() => {navigate(`/profile/${liker.userName}`)}}>{liker.userName}</span>)}

else if (likeList.length >= 4 ){
  return (
<h1 className='font-semibold cursor-pointer' onClick={() => {navigate(`/profile/${liker.userName}`)}}>{liker.userName}</h1>
)}

}

)


return (
isOnFeed ? (
    <div key={post._id} className='border rounded-xl relative w-[512px] mx-auto'>
      <div className='flex justify-between border-b '>
      <div>
      <Link to={`/profile/${post.postedBy.userName}`} className='flex gap-3 my-auto py-3 pl-4'>
        <img className='w-10 h-10 rounded-full' src={post.postedBy.profilePic}/>
        <h1 className='my-auto font-semibold'>{post.postedBy.userName}</h1>
      </Link>
      </div>
      <div className='my-2 mr-4'>
        <h1 className='text-3xl font-semibold cursor-pointer' onClick={() => setEditModalIsOpen(!editModalIsOpen)}>...</h1>
        <EditPostModal isOpen={editModalIsOpen} postId={post._id} postCaption={post.caption}/>
      </div>
      </div>
      <img className='w-full h-[512px] object-fill border-b' src={post.photo} />
      <div className='flex justify-between mx-4 pt-4'>
      <div className='flex gap-3'>
      <div onClick={() => likePostToggle(post._id)}>
     { isLiked ? <FavoriteSelected /> : <FavoriteUnselected />}
      </div>
      <div onClick={() => setCommentIsOpen(!commentIsOpen)}>
      <CommentIcon />
      </div>
      <ShareIcon />
      </div>
      <div>
        <BookmarkUnselected />
      </div>
      </div>
      <div className='flex ml-4 pt-4'> 
      <h1 className={likeList.length == 0 ? `hidden` : `flex`}>Liked by<span className='flex'>{likes}</span></h1>
      </div>
      <div className='ml-4 py-3'>
      <div className='flex gap-2'>
      <Link to={`/profile/${post.postedBy.userName}`}>
      <h2 className='font-semibold'>{post.postedBy.userName}</h2>
      </Link>
      <h2>{post.caption}</h2>
      </div>
      <CommentForm postId={post._id} isOpen={commentIsOpen} />
      <Comments postId={post._id} />
      <h2 className='text-xs text-gray-500 mt-2'>{formattedDate}</h2>
      </div>
    </div>
  ) : (
<div className='mx-auto'>
<div className='hover:bg-black relative'>
  {/* Comment and Likes Count on hover --> doesn't work yet */}
{/* <div className='absolute flex border text-5xl'>
<h1 className='hover:visible text-white font-bold mx-auto my-auto'>{post.numberOfLikes}</h1>
<h1 className='hover:visible text-white font-bold mx-auto my-auto'>{post.numberOfComments}</h1>
</div> */}
<div key={post._id} className='my-6 cursor-pointer hover:opacity-25' onClick={() => navigate(`/post/${post._id}`)}>
<img className='h-[256px] w-[256px]' src={post.photo}/>
</div>
</div>
</div>
  ))

  }

export default Post