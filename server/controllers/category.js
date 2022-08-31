
const Category = require('../models/category')

const slugify = require('slugify')

const formidable = require('formidable')

const { v4: uuidv4 } = require('uuid')

const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const fs = require('fs')

// exports.create = (req, res) => {
//     let form = new formidable.IncomingForm()

//     form.parse(req, (err, fields, files) => {
//         if (err) {
//             res.status(400).json({
//                 message: 'Image could not be uploaded'
//             })
//         }

//         // console.table({ err, fields, files })

//         const { name, content } = fields
//         const { image } = files

//         // console.log('image：', image.newFilename)

//         const slug = slugify(name)

//         let category = new Category({ name, content, slug })

//         if (image.size > 2000000) {
//             res.status(400).json({
//                 message: 'Image size should not be more than 2mb'
//             })
//         }

//         const params = {
//             Bucket: process.env.AWS_BUCKET,
//             Key: `category/${uuidv4()}`,
//             Body: fs.readFileSync(image.filepath),
//             ACL: 'public-read',
//             contentType: 'image/jpg'
//         }

//         s3.upload(params, (err, data) => {
//             if (err) {
//                 console.log('upload error:', err)
//                 res.status(400).json({
//                     error: 'upload to s3 failed'
//                 })
//             }
//             console.log('AWS UPLOAD RES DATA', data)
//             category.image.url = data.Location
//             category.image.key = data.Key

//             // save to db
//             category.save((err, success) => {
//                 if (err) {
//                     console.log('save error:', err)
//                     res.status(400).json({
//                         error: 'Duplicate content'
//                     })
//                 }
//                 return res.json(success)
//             })

//         })
//     })
// }

exports.create = (req, res) => {
    const { name, image, content } = req.body

    // console.table({ name, image, content })

    const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64')

    const type = image.split(';')[0].split('/')[1]

    const slug = slugify(name)
    let category = new Category({ name, content, slug })

    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `category/${uuidv4()}.${type}`,
        Body: base64Data,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        contentType: `image/${type}`
    }

    s3.upload(params, (err, data) => {
        if (err) {
            console.log('upload error:', err)
            res.status(400).json({
                error: 'upload to s3 failed'
            })
        }
        console.log('AWS UPLOAD RES DATA', data)
        category.image.url = data.Location
        category.image.key = data.Key

        // posted by
        category.postedBy = req.auth._id

        // save to db
        category.save((err, success) => {
            if (err) {
                console.log('save error:', err)
                res.status(400).json({
                    error: 'Duplicate content'
                })
            }
            return res.json(success)
        })
    })

}

exports.list = (req, res) => {
    Category.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Category could not load.'
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