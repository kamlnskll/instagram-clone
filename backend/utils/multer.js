import multer from 'multer';
import DatauriParser from 'datauri/parser.js'
import path from 'path'

const storage = multer.memoryStorage()

const multerUploads = multer({storage: storage, limits:{}})

const parser = new DatauriParser()


// const dataUri = (req) => {

// }
// const dataUri = (req) => {

// dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)

// }


export { multerUploads }