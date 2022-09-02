
const Link = require('../models/link')

// const AWS = require('aws-sdk')

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
// })

// const fs = require('fs')

exports.create = (req, res) => {
    const { title, url, categories, type, medium } = req.body

    // console.table({ title, url, categories })

    const slug = url

    let link = new Link({ title, url, type, medium, slug })

    link.postedBy = req.auth._id

    let arrayOfCategories = categories && categories.split(',')

    link.categories = arrayOfCategories

    link.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'link has already existed'
            })
        }
        res.json(data)
    })


}

exports.list = (req, res) => {
    Link.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Lists could not load.'
            })
        }
        return res.json(data)
    })
}

exports.read = (req, res) => {

}

exports.update = (req, res) => {

}

exports.remove = (req, res) => {

}