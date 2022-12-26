import express from 'express'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'
import { getMessages, sendMessage } from '../controllers/messages.js'

const router = express.Router()
router.use(cors())
router.use(requireLogin)

router.post('/sendmessage', sendMessage)
router.get('/:conversationId', getMessages)

export default router