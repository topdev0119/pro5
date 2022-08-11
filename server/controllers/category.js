
const Category = require('../models/category')

const slugify = require('slugify')

exports.create = (req, res) => {
    const { name, content } = req.body
    const slug = slugify(name)

    const image = {
        url: `https://via.placeholder.com/250x250.png?text=${process.env.CLIENT_URL}`,
        key: '123'
    }


    const category = new Category({ name, image, slug })
    category.postedBy = req.auth._id

    category.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: 'Category does not created'
            })
        } else {
            res.json(data)
        }
    })
}

exports.list = (req, res) => {

}

exports.read = (req, res) => {

}

exports.update = (req, res) => {

}

exports.remove = (req, res) => {

}