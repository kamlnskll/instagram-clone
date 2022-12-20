import React from 'react'

type Props = {

isOpen: boolean,

}

const EditPostModal = ({isOpen}: Props) => {
  return (
  
    <>
    {isOpen ?
    <div className='bg-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2'>
    <div className='mx-6 text-center'>
    <h1 className='font-semibold outline outline-gray-50 py-1 my-4 bg-blue-400 hover:bg-blue-500 text-white hover:text-black cursor-pointer rounded-md'>Edit Post</h1>
    <h1 className='font-semibold bg-red-400 hover:bg-red-500 py-1 text-white hover:text-black cursor-pointer rounded-md'>Delete Post</h1>
    </div>
    </div>

    : null}
    
    </>
  )
}

export default EditPostModal