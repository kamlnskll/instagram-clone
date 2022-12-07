import multer from 'multer';

const storage = multer.memoryStorage()

const multerUploads = multer({storage: storage, limits:{}})


export { multerUploads }