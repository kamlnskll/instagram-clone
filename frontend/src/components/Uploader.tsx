import axios from 'axios'
import { useState } from 'react'

type Props = {

imgData: any,
setAddCaption: any,

}

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const postURL = process.env.REACT_APP_BACKEND_POST_URL

const Uploader = ({imgData, setAddCaption}: Props) => {
// @ts-ignore
const [fileInput, setFileInput] = useState('')
// @ts-ignore
const [previewSource, setPreviewSource] = useState('')
// @ts-ignore
const [selectedFile, setSelectedFile] = useState('')

// @ts-ignore
const [image, setImage] = useState('')
// @ts-ignore 
const [imageName, setImageName] = useState('')


const handleImg = (e: any) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
}

const sendImgtoBackend = async (e: any) => {
e.preventDefault()
const formData = new FormData()
formData.append('image', image)
const sendImg = await axios.post(`${baseURL}${postURL}/upload`, formData, { headers: {
    "Content-Type": "multipart/form-data",
    }})
const getLinkFromUpload = sendImg.data.data.image
    console.log('sendImg', sendImg)
    console.log('get Link', getLinkFromUpload)
    imgData(getLinkFromUpload).then(setAddCaption(true))
}


  return (
   
        <form className='px-12 pt-8 pb-12' encType='multipart/form-data'>
        
        <input type='file' name='image' onChange={handleImg} className='py-4'/>
        <button className='bg-sky-600 text-center text-sm py-1 w-full rounded-sm text-white font-bold' onClick={sendImgtoBackend} type='submit'>Submit your image</button>

        </form>
   
  )
}

export default Uploader