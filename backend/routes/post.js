import express from 'express'
import { createPost, deletePost, getAllPosts, getPostById, getSubscribedPosts, likePostToggle, uploadContentToCloudinary } from '../controllers/post.js'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'
import { multerUploads } from '../utils/multer.js'

const router = express.Router()
router.use(cors())

router.get('/getallposts', getAllPosts)
router.get('/:postid', getPostById)
router.post('/upload', multerUploads.single('image'), uploadContentToCloudinary) 
router.use(requireLogin)
router.get('/getsubscribedposts', getSubscribedPosts)
router.post('/:postid/togglelike', likePostToggle)
router.post('/createpost', createPost)
router.delete('/deletepost', deletePost)


export default router
