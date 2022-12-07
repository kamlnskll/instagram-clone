import express from 'express'
import { createPost, deletePost, getAllPosts, getPostById, getSubscribedPosts, uploadContentToCloudinary } from '../controllers/post.js'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'
import { multerUploads } from '../utils/multer.js'

const router = express.Router()
router.use(cors())

router.get('/getallposts', getAllPosts)
router.get('/getpostbyid', getPostById)
router.post('/upload', multerUploads.single('image'), uploadContentToCloudinary) 
router.use(requireLogin)
router.get('/getsubscribedposts', getSubscribedPosts)
router.post('/createpost', createPost)
router.delete('/deletepost', deletePost)


export default router
