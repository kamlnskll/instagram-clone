import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'
import profileRoutes from './routes/profile.js'
import { multerUploads } from './utils/multer.js'
import { cloudinaryConfig, uploader } from './utils/cloudinary.js'
import path from 'path'
import DatauriParser from 'datauri/parser.js'


const app = express()
dotenv.config()
app.use(cors())
app.use(bodyParser.json({limit: '5mb'}))
app.use('*', cloudinaryConfig)


const connectToMongoCluster = async () => {
try{
    await mongoose.connect(process.env.MONGO_CONNECTION_URL)
    console.log('Successfully connected to MongoDB cluster')
} catch (error) {
    throw error
}
}

mongoose.connection.on('Disconnected', () => {
    console.log('Disconnected from MongoDB cluster')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // Fix this
app.post('/testupload', multerUploads.single('image'), (req, res) => { 

const parser = new DatauriParser()

const extName = path.extname(req.file.originalname).toString();
const file64 = parser.format(extName, req.file.buffer);


    // const file = dataUri(req)
    // console.log(file)
    return uploader.upload(file64.content).then((result) => {
        const image = result.url
        return res.status(200).json({
            message: 'Your image has been uploaded to cloudinary',
            data: {
                image
            }
        }).then()
        

    }).catch((err) => res.status(400).json({
        message: 'Something went wrong with your upload to cloudinary',
        data: { err }
    }))

})
  

// Backend API routes
app.use('/api/posts', postRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)


  app.listen(process.env.PORT, (error) =>{
    if(!error){
        connectToMongoCluster()
        console.log(`Server is Successfully Running on ${process.env.PORT}`)}
    else
        console.log("Error occurred, server can't start", error);
    }
);