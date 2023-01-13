import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'
import profileRoutes from './routes/profile.js'
import commentRoutes from './routes/comments.js'
import conversationRoutes from './routes/conversations.js'
import messageRoutes from './routes/messages.js'
import { cloudinaryConfig } from './utils/cloudinary.js'
import { Server } from 'socket.io'
import http from 'http'



const app = express()
dotenv.config()
app.use(cors())
const server = http.createServer(app)
app.use(bodyParser.json({limit: '5mb'}))
app.use('*', cloudinaryConfig)

export const io = new Server(server, {

    cors: {
        origin: "http://localhost:3000"
    } 
})


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

// Socket IO Stuff

io.on('connection', (socket) => {
console.log(`User with ID: ${socket.id} connected`)

socket.on("join_room", (data) => {
    if(!socket.rooms.hasOwnProperty(data)){
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    } else {
        console.log(`User with ID: ${socket.id} is already in room: ${data}`)
    }
    
})

socket.on("leave_room", (data) => {
socket.leave(data)
console.log(`User with ID: ${socket.id} left room ${data}`)
})


socket.once('send_message', (data) => {
   socket.to(data.room).emit("receive_message", data)
})

socket.on('disconnect', () => {
    console.log(`User with ID: ${socket.id} disconnected`)
})


})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// Backend API routes
app.use('/api/posts', postRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/conversations', conversationRoutes)
app.use('/api/messages', messageRoutes)

// If whole server breaks change this from server.listen back to app.listen
  server.listen(process.env.PORT, (error) =>{
    if(!error){
        connectToMongoCluster()
        console.log(`Server is Successfully Running on ${process.env.PORT}`)}
    else
        console.log("Error occurred, server can't start", error);
    }
);