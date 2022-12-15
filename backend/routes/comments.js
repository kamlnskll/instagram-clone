import express from 'express'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'
import { addComment } from '../controllers/comment.js'

const router = express.Router()
router.use(cors())
router.use(requireLogin)

router.post('/:postid/addcomment', addComment)

export default router