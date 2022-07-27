const express = require('express')

console.log('Starting server...')

const app = express()

app.get('/api/register', (req, res) => { 
    res.json({
        data: 'you hit register api'
    })
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server started on port ${port}`))

