import express from 'express'
import cors from 'cors'
import { registerNewUser, loginUser, getUserbyUsername,  } from '../controllers/user.js'


const router = express.Router()
router.use(cors())

router.post('/register', registerNewUser)
router.post('/login', loginUser)
router.get('/:username', getUserbyUsername)
router.post('/follow/:username')
router.post('/unfollow/:username')

export default router