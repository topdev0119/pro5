
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: [true, 'Please add a name'],
            max: [256, 'Title cannot be more than 256 characters']
        },
        url: {
            type: String,
            trim: true,
            required: [true, 'Please add a name'],
            max: [256, 'URL cannot be more than 256 characters']
        },
        slug: {
            type: String,
            lowercase: true,
            required: true,
            index: true
        },
        postedBy: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        categories: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Category',
                required: true
            }
        ],
        type: {
            type: String,
            default: 'Free'
        },
        medium: {
            type: String,
            default: 'Video'
        },
        clicks: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Link', linkSchema)