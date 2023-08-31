import express from 'express'
const router = express.Router()
//get user controller
import getUser from '../controllers/post.js'
// get posts controller
import getPosts from '../controllers/post.js'

router.get('/', getPosts)

export default router