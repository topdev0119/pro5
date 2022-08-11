const express = require('express')

const morgan = require('morgan')

const bodyParser = require('body-parser')

const cors = require('cors')

const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

// db
console.log('wait for DB connection')
mongoose
    .connect(process.env.DATABASE_CLOUD)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err))

const authRoutes = require('./routes/auth')

const userRoutes = require('./routes/user')

const categoryRoutes = require('./routes/category')

// middlewares
app.use(morgan('dev'))

app.use(bodyParser.json())

// app.use(cors())

app.use(cors({ origin: process.env.CLIENT_URL }))

app.use('/api', authRoutes)

app.use('/api', userRoutes)

app.use('/api', categoryRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server started on port ${port}`))



