import React, { useState } from 'react'
import { addNewComment } from '../utils/axios/commentAPIs'

type Props = {
isOpen: boolean
postId: any
}

const CommentForm = ({isOpen, postId}: Props) => {

const [comment, setComment] = useState('')

  return (
    <div className={ isOpen ? `pr-4 pt-4 flex relative` : `hidden`}>
<input onChange={(e) => setComment(e.target.value)}className='border pb-1 border-none bg-gray-50 w-full placeholder:text-sm outline-none text-sm overflow-x-scroll mr-20'
placeholder='Add a comment...'/> 
<button type='button' onClick={() => addNewComment(postId, comment)} className='absolute bottom-0 right-6 border bg-sky-500 hover:bg-sky-600 px-2 py-1 rounded-lg text-xs text-white font-bold border-gray-300'>Send</button>
</div>
  )
}

export default CommentForm