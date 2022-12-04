import express from 'express'
import cors from 'cors'
import { getUsernameofLoggedInUser } from '../controllers/profile.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.use(requireLogin)
router.get('/getprofiledata', getUsernameofLoggedInUser)

export default router