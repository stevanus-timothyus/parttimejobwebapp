import express from 'express'
// import jobs from './data/jobs.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import applicantRoutes from './routes/applicantRoutes.js'
import path from 'path'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())

app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)
app.use('/api', applicantRoutes)


const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}




const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold))