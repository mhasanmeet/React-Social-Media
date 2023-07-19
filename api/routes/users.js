import express from 'express'
const router = express.Router()
//get user controller
import getUser from '../controllers/user.js'

router.get('/find/:userId', getUser)

export default router