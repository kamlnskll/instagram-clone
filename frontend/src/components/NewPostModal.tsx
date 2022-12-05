import React from 'react'


type Props =  {
isOpen: boolean,
}

const NewPostModal = ({isOpen}: Props) => {
  return (
    isOpen ? (
    <div className='absolute bg-white rounded-2xl h-1/2 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <h1 className='font-bold text-center py-2 border-b'>Create a new post</h1>
    <div className='h-full flex'>
    <div className='my-auto mx-auto'>
    <h1 className='text-xl tracking-wide'>Drag photo and videos here</h1>
    <button className='text-sm bg-sky-600 px-4 py-1 rounded-md font-bold text-white'>Select from computer</button>

    </div></div>
  
    </div>
    
    ) : null
  )
}

export default NewPostModal