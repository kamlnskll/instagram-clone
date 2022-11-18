import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

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
  
  app.listen(process.env.PORT, (error) =>{
    if(!error){
        connectToMongoCluster()
        console.log(`Server is Successfully Running on ${process.env.PORT}`)}
    else
        console.log("Error occurred, server can't start", error);
    }
);