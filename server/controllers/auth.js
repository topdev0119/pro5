const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' })

exports.register = (req, res) => {
    // console.log('REGISTER CONTROLLER', req.body)
    const { name, email, password } = req.body
    const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_TO],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data:
                    `   <html>
                            <body>
                                <h1 style="color: teal;">Hello ${name}, plrease verify your email address</h1>
                                <p>Please use this link to complete your registration</p>
                                <p>Thanks</p>
                            </body>
                        </html>
                    `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Complete your registration"
            }
        }
    }

    const sendEmailOnRegister = ses.sendEmail(params).promise()

    sendEmailOnRegister
        .then(data => {
            console.log('Email submitted to SES', data)
            res.send('Email sent')
        })
        .catch(error => {
            console.log('SES email on register', error)
            res.send('We could not verify your email. Please try again.')
        })


}

