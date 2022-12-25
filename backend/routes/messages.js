import express from 'express'
import cors from 'cors'
import { requireLogin } from '../utils/auth'
import { sendMessage } from '../controllers/messages'

const router = express.Router()
router.use(cors())
router.use(requireLogin)

router.post('/sendmessage', sendMessage)
router.get('/getmessage/:id')