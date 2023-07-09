import express from 'express'
import mongoose from 'mongoose'
import config from './db/config.js'
import postRoutes from './routes/posts.js'
import cors from 'cors'

// create the express app
const app = express()

// set up the dynamic port
const PORT = 8000

// middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

// routes
app.use('/api/posts', postRoutes)

// connect to the database
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

// start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
