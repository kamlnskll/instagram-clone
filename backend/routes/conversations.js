import express from 'express'
import cors from 'cors'
import { requireLogin } from '../utils/auth.js'
import { newConversation } from '../controllers/conversations.js'

const router = express.Router()
router.use(cors())
router.use(requireLogin)

router.post('/newconversation', newConversation)
router.get('/:userId/getconversations')

export default router