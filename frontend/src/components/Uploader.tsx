import { useState } from 'react'

type Props = {

imgData: any
setAddCaption: any,

}

const Uploader = ({imgData, setAddCaption}: Props) => {
// @ts-ignore
const [fileInput, setFileInput] = useState('')
// @ts-ignore
const [previewSource, setPreviewSource] = useState('')
// @ts-ignore
const [selectedFile, setSelectedFile] = useState('')

const handleFileInputChange = (e: any) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file)
    setFileInput(e.target.value)
}

const previewFile = (file: any) => {
const reader = new FileReader()
reader.readAsDataURL(file)
reader.onloadend = () => {
// @ts-ignore
setPreviewSource(reader.result)
}
}

const handleFileSubmit = (e: any) => {
    e.preventDefault()
    if(!selectedFile) return;
    const reader = new FileReader()
        // @ts-ignore
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
        uploadImage(reader.result)
    };
    reader.onerror = () => {
        console.log('Something went wrong when uploading file')
    }}


const uploadImage = async (base64Img: any) => {
console.log(base64Img)
await imgData(base64Img).then(setAddCaption(true)).then(console.log('img data variable loaded I think')).catch((err: any) => console.log(err))

}

const sendImgtoBackend = async () => {


    
}

// Maybe for multistep form including caption it can be possible to save the base64 conversion to a context provider and then grab it from the other part of the form with the caption.
// Not sure

  return (
    <div className=''>
        <form onSubmit={handleFileSubmit}>
        <input 
        type='file'
        className='text-sm bg-sky-600 px-4 py-1 rounded-md font-bold text-white' 
        onChange={handleFileInputChange}
        value={fileInput}
        name='image'
        />
        <button className='flex border-2 mx-auto mt-4 px-2 rounded-lg font-semibold' type='submit' onClick={() => {console.log('Btn submitted')}}>Next</button>
        </form>

    </div>
  )
}

export default Uploader