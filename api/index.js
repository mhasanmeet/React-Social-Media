import express from 'express'
const app = express()
const PORT = 7000;
import cors from 'cors'
import cookieParser from 'cookie-parser';

//import routes
import userRoutes from './routes/users.js'
// import postRoutes from './routes/posts.js'
// import likeRoutes from './routes/likes.js'
// import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//listen server in browser
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})

//get all routes
app.use('/api/users', userRoutes)
// app.use('/api/posts', postRoutes)
// app.use('/api/likes', likeRoutes)
// app.use('/api/comments', commentRoutes)
app.use('/api/auth', authRoutes)


