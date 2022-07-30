const mongoose = require('mongoose')

const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please add a username'],
        max: [12, 'Username cannot be more than 12 characters'],
        unique: true,
        index: true,
        lowercase: true,
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a name'],
        max: [32, 'Name cannot be more than 32 characters'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add an email'],
        max: [32, 'Email cannot be more than 32 characters'],
        unique: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: [true, 'Please add a password']
    },
    salt: String,
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamps: true })

// virtual fields

UserSchema.virtual('password')
    .set(function (password) {
        // create a temporary variable called _password
        this._password = password
        // generate salt
        this.salt = this.makeSalt()
        // encrypt password
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

// method > authenticate, encryptPassword, makeSalt

UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },  
    encryptPassword: function (password) {
        if (!password) return ''
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

// export use model
module.exports = mongoose.model('User', UserSchema)