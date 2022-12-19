import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getPostComments } from '../utils/axios/commentAPIs'


type Props = {
// comments: any
postId: any

}
const Comments = ({postId}: Props) => {

const [comments, setComments] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()


useEffect(() => {
getPostComments(postId).then((res) => { 
setComments(res[0].comments)
setLoading(false)}
)

}, [])


if(loading){
  return <h1>Loading comments...</h1>
}

  return (
    <div className='pt-2'>
{comments.map((comment: any) => {
return (
<div key={comment._id} className='flex text-sm gap-2'>
{/* <img className='w-[12px] h-[12px] rounded-full'src={comment.postedBy.profilePic}/> */}
<h1 onClick={() => navigate(`profile/${comment.postedBy.userName}`)} className='font-semibold cursor-pointer'>{comment.postedBy.userName}</h1>
<h1 className=''>{comment.comment}</h1>
</div>
)})}

{/* <button type='button' onClick={() => console.log(comments)}>Test</button> */}

    </div>
)
}

export default Comments