const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
    })
)
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/staff', require('./routes/staff.routes'))
app.use('/api/course', require('./routes/course.routes'))
app.use('/api/news', require('./routes/news.routes'))
app.use('/api/gallery', require('./routes/gallery.routes'))

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose
            .connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            .then(() => console.log('MongoDB Connected...'))
            .catch((err) => console.log(err))

        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}...`)
        )
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()