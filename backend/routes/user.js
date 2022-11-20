import express from 'express'
import { registerNewUser, loginUser, fetchLoggedInUserData } from '../controllers/user.js'
import cors from 'cors'

const router = express.Router()
router.use(cors())

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.get('/fetchuserdata', fetchLoggedInUserData)

export default router