import express from 'express'
const router = express.Router()
//get auth controller
import {login, register, logout} from '../controllers/auth.js'

// api endpoints 
router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)

export default router