import React, {useState} from 'react'
import Uploader from './Uploader'
import { createNewPost } from '../utils/axios/postAPIs'

type Props =  {
isOpen: boolean,
}

const NewPostModal = ({isOpen}: Props) => {

const [img, setImg] = useState('')
const [addCaption, setAddCaption] = useState(false)
const [caption, setCaption] = useState('')

const imgData = async (data: string) => {
await setImg(data)
}

  return (
    isOpen ? (
    <div className={addCaption ? `absolute bg-white rounded-2xl h-1/2 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2` : `absolute bg-white rounded-2xl h-1/2 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
    {addCaption ? <h1 className='font-bold text-center py-2 border-b'>Add a caption</h1> : <h1 className='font-bold text-center py-2 border-b'>Create a new post</h1> }
    <div className='h-full flex'>
    <div className='my-auto mx-auto'>
    {addCaption ? <div className='border'>
    <textarea 
    placeholder='Add a caption here'
    className='outline-none border'
    onChange={(e) => setCaption(e.target.value)}
    /> 
    <button onClick={() => {
      console.log(caption, img)
      createNewPost(caption, img).then(res => console.log(res)).catch(err => console.log(err))
      
      }}>Upload</button>
    
    </div> : <> <h1 className='text-xl tracking-wide'>Drag photo and videos here</h1>
    <Uploader imgData={imgData} setAddCaption={setAddCaption}/>
    
    </>}
    
  
    </div></div>
  
    </div>
    
    ) : null
  )
}

export default NewPostModal