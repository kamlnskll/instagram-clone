import React, { useEffect, useState } from 'react'
import { getPostComments } from '../utils/axios/commentAPIs'


type Props = {
// comments: any
postId: any

}
const Comments = ({postId}: Props) => {

const [comments, setComments] = useState([])

useEffect(() => {
getPostComments(postId).then((res) => {setComments(res)
console.log(res)})

}, [])

  return (
    <div>
{/* {comments.map((comment: any) => {
return (
<div key={comment._id}>
<img src={comment.postedBy.profilePic}/>
<h1>{comment.postedBy.userName}</h1>
<h1>{comment.comment}</h1>
</div>
)})} */}

<button type='button' onClick={() => console.log(comments)}>Test</button>

    </div>
)
}

export default Comments