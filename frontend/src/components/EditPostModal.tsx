import React, { useEffect, useState } from 'react'
import { deletePost, editPost } from '../utils/axios/postAPIs'

type Props = {

isOpen: boolean,
postId: any,
postCaption: string,

}

const EditPostModal = ({isOpen, postId, postCaption}: Props) => {

const [currentTab, setCurrentTab] = useState('')
const [caption, setCaption] = useState(postCaption)

const handleCaptionEdit = async () => {

await editPost(postId, caption).then(res => console.log(res))
setCurrentTab('')


}

const handlePostDelete = async () => {

await deletePost(postId).then(res => window.alert('Post Successfully Deleted'))

}


  return (
  
    <>
    {isOpen ?
    <div className={currentTab == '' ? `bg-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2` : `bg-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-full flex`}>
    <div className={currentTab == '' ? `mx-6 text-center flex flex-col` : `mx-6 text-center flex flex-col`}>
    <button type='button' onClick={() => setCurrentTab('edit')}className='font-semibold py-1 px-12 my-4 bg-blue-400 hover:bg-blue-500 text-white hover:text-black cursor-pointer rounded-md'>Edit</button>
    <button type='button' onClick={() => setCurrentTab('delete')}className='font-semibold bg-red-400 hover:bg-red-500 py-1 text-white hover:text-black cursor-pointer rounded-md'>Delete Post</button>
    </div>
    <div className={currentTab == '' ? `hidden` : `bg-white rounded-xl w-full relative`}>
        <h1 className='absolute text-gray-400 right-3 top-2 font-bold hover:text-red-500 hover:cursor-pointer' onClick={() => setCurrentTab('')}>X</h1>
        <div className='pt-8'>
        {currentTab == 'edit' && (
        <div className='w-full px-2'>
          <h1 className='text-center font-semibold'>Edit Post Caption</h1>  
          <textarea className='w-full border outline-none' placeholder={postCaption} value={caption} onChange={(e) => setCaption(e.target.value)}/>
          <button type='button' className='font-semibold py-1 px-12 my-4 bg-orange-400 hover:bg-orange-500 text-white cursor-pointer rounded-md' onClick={handleCaptionEdit}>Confirm Edit</button>
        </div>
        )}
         {currentTab == 'delete' && (
        <div>
        <h1>Are you sure you want to delete this post?</h1>
        <div className='flex gap-4 mx-6'>
        <button type='button' className='font-semibold py-1 px-3 my-4 bg-blue-400 hover:bg-blue-500 text-white hover:text-black cursor-pointer rounded-md' onClick={handlePostDelete}>Delete post</button> 
        <button type='button' className='font-semibold py-1 px-3 my-4 bg-blue-400 hover:bg-blue-500 text-white hover:text-black cursor-pointer rounded-md' onClick={() => setCurrentTab('')}>Cancel</button> 
        </div>
        </div>
        )}
        </div>
    </div>
    </div>

    : null}
    
    </>
  )
}

export default EditPostModal