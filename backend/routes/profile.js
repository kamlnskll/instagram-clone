import express from 'express'
import cors from 'cors'
import { getProfileDataForEditPage, getUsernameofLoggedInUser } from '../controllers/profile.js'
import { requireLogin } from '../utils/auth.js'

const router = express.Router()
router.use(cors())

router.use(requireLogin)
router.get('/getprofiledata', getUsernameofLoggedInUser)
router.get('/editprofiledata', getProfileDataForEditPage)

export default router