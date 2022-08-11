const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a name'],
        max: [32, 'Name cannot be more than 32 characters']
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    image: {
        url: String,
        key: String
    },
    content: {
        type: {},
        min: [20, 'Content cannot be less than 10 characters'],
        max: [2000000, 'Content cannot be more than 10000 characters']
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)