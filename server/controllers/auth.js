const AWS = require('aws-sdk')

const User = require('../models/user')

const jwt = require('jsonwebtoken')

const { registerEmailParams } = require('../helpers/email')

const shortId = require('shortid')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' })

exports.register = (req, res) => {
    // console.log('REGISTER CONTROLLER', req.body)
    const { name, email, password } = req.body

    // check if user with that email exists
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            })
        }
    
        // generate token with user name, email and password
        const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: '15m' })

        const params = registerEmailParams(name, email, token)

        const sendEmailOnRegister = ses.sendEmail(params).promise()

        sendEmailOnRegister
            .then(data => {
                console.log('Email submitted to SES', data)
                res.json({
                    message: `Email has been sent to ${email}. Follow the instructions to complete your registration`
                })
            })
            .catch(error => {
                console.log('SES email on register', error)
                res.json({
                    message: `We could not verify your email. Please try again`
                })
            })
    })
}


exports.registerActivate = (req, res) => {
    const { token } = req.body

    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function (err, decoded) {
        if (err) {
            // console.log('JWT VERIFY IN ACCOUNT ACTIVATION ERROR', err)
            return res.status(401).json({
                error: 'Expired link. Try again'
            })
        }
        const { name, email, password } = jwt.decode(token)

        const username = shortId.generate()

        User.findOne({ email }).exec((err, user) => {
            if (user) {
                return res.status(401).json({
                    error: 'Email is taken'
                })
            }

            // register new user
            const newUser = new User({ name, email, password, username })

            newUser.save((err, result) => {
                if (err) {
                    // console.log('SAVE USER IN REGISTER ACTIVATE ERROR', err)
                    return res.status(401).json({
                        error: 'Error saving user in database. Try later'
                    })
                }
                return res.json({
                    message: 'Registration success. Please login'
                })
            })
        })
    })
}
