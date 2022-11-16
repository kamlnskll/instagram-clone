import * as dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(process.env.PORT, (error) =>{
    if(!error){
        console.log(`Server is Successfully Running on ${process.env.PORT}`)}
    else
        console.log("Error occurred, server can't start", error);
    }
);