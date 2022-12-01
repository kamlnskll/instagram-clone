import express from 'express'
import { createPost, deletePost, getAllPosts, getPostById } from '../controllers/post.js'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.get('/getallposts', getAllPosts)

router.use(requireLogin)
router.get('/getpostbyid', getPostById)
router.post('/createpost', createPost)
router.delete('/deletepost', deletePost)

export default router
