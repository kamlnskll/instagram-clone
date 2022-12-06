import multer from 'multer';
import Datauri from 'datauri'
import DatauriParser from 'datauri/parser.js'
import path from 'path'

const storage = multer.memoryStorage()

const multerUploads = multer({storage}).single('image')

// const dUri = new Datauri()
const parser = new DatauriParser()

const dataUri = (req) => {parser.format(path.extname(req.file.originalname).toString(), req.file.buffer).content}

// const dataUri = (req) => {

// dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)

// }


export { multerUploads, dataUri }