const express = require('express')

const app = express() 

const authRoutes = require('./routes/auth')

// middlewares
app.use('/api', authRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server started on port ${port}`))

