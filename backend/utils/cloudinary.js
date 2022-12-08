import {config, uploader} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

const cloudinaryConfig = (req, res, next) => {
  
  config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
  next()
}

export {cloudinaryConfig, uploader}










// OLD CLOUDINARY CODE
// import * as dotenv from 'dotenv'
// dotenv.config()


// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true
//   });

// const opts = {
// overwrite: true,
// invalidate: true,
// resource_type: 'auto',

// }

// export const uploadContent = (image) => { // Image is BASE64 format
// return new Promise((resolve, reject) => {
// cloudinary.uploader.upload(image, opts, (error, result) => {
// if (result && result.secure_url){
//     console.log(result.secure_url);
//     resolve(result.secure_url);
// }
// console.log(error.message, 'cloudinary error')
// return reject({message: error.message})
// })
// })
// }

