import axios from 'axios'
import { useState } from 'react'

type Props = {

imgData: any
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

// const handleFileInputChange = (e: any) => {
//     const file = e.target.files[0]
//     previewFile(file)
//     setSelectedFile(file)
//     setFileInput(e.target.value)
// }

// const previewFile = (file: any) => {
// const reader = new FileReader()
// reader.readAsDataURL(file)
// reader.onloadend = () => {
// // @ts-ignore
// setPreviewSource(reader.result)
// }
// }

// const handleFileSubmit = (e: any) => {
//     e.preventDefault()
//     if(!selectedFile) return;
//     const reader = new FileReader()
//         // @ts-ignore
//     reader.readAsDataURL(selectedFile)
//     reader.onloadend = () => {
//         uploadImage(reader.result)
//     };
//     reader.onerror = () => {
//         console.log('Something went wrong when uploading file')
//     }}


// const uploadImage = async (base64Img: any) => {
// console.log(base64Img)
// await imgData(base64Img).then(setAddCaption(true)).then(console.log('img data variable loaded I think')).catch((err: any) => console.log(err))

// }

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



// sendImgtoCloudinary(formData).then((res) => console.log(res))


// Maybe for multistep form including caption it can be possible to save the base64 conversion to a context provider and then grab it from the other part of the form with the caption.
// Not sure

  return (
    // <div className=''>
    //     <form onSubmit={handleFileSubmit}>
    //     <input 
    //     type='file'
    //     className='text-sm bg-sky-600 px-4 py-1 rounded-md font-bold text-white' 
    //     onChange={handleFileInputChange}
    //     value={fileInput}
    //     name='file'
    //     />
    //     <button className='flex border-2 mx-auto mt-4 px-2 rounded-lg font-semibold' type='submit' onClick={() => {console.log('Btn submitted')}}>Next</button>
    //     </form>


        <form encType='multipart/form-data'>
        <div className='bg-blue-400 border p-3'>
        <h1>TESTING PURPOSES ONLY FOR AXIOS</h1>
        <input type='file' name='image' onChange={handleImg} />
        <button onClick={sendImgtoBackend} type='submit'>SUBMIT TEST IMAGE!!!!</button>
        </div>
        </form>
   
  )
}

export default Uploader