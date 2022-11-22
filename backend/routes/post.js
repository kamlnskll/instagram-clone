import express from 'express'
import { createPost, deletePost, getAllPosts, getPostById } from '../controllers/post.js'
import cors from 'cors'

const router = express.Router()
router.use(cors())

router.post('/createpost', createPost)
router.delete('/deletepost', deletePost)
router.get('/getallposts', getAllPosts)
router.get('/getpostbyid', getPostById)

export default router
