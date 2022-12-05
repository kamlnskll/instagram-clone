import express from 'express'
import { createPost, deletePost, getAllPosts, getPostById, getSubscribedPosts, uploadImgorVid } from '../controllers/post.js'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.get('/getallposts', getAllPosts)
router.get('/getpostbyid', getPostById)
router.use(requireLogin)
router.get('/getsubscribedposts', getSubscribedPosts)
router.post('/createpost', createPost)
router.delete('/deletepost', deletePost)
router.post("/uploadcontent", uploadImgorVid)


export default router
