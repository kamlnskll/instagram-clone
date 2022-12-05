import React, {useState} from 'react'
import Uploader from './Uploader'


type Props =  {
isOpen: boolean,
}

const NewPostModal = ({isOpen}: Props) => {

const [addCaption, setAddCaption] = useState(false)

  return (
    isOpen ? (
    <div className='absolute bg-white rounded-2xl h-1/2 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    {addCaption ? <h1 className='font-bold text-center py-2 border-b'>Add a caption</h1> : <h1 className='font-bold text-center py-2 border-b'>Create a new post</h1> }
    <div className='h-full flex'>
    <div className='my-auto mx-auto'>
    {addCaption ? <h1>Caption Space Here + IMG PREVIEW</h1> : <> <h1 className='text-xl tracking-wide'>Drag photo and videos here</h1>
    <Uploader /> </>}
    
    


    </div></div>
  
    </div>
    
    ) : null
  )
}

export default NewPostModal