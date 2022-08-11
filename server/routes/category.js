const express = require('express')

const router = express.Router()

const { categoryCreateValidator, categoryUpdateValidator } = require('../validators/category')

const { requireSignin, adminMiddleware } = require('../controllers/auth')

const { runValidation } = require('../validators')
const { route } = require('./auth')

const { create, list, read, remove, update } = require('../controllers/category')

router.post('/category', categoryCreateValidator, runValidation, requireSignin, adminMiddleware, create)
router.get('/categories', list)
router.get('/category/:slug', read)
router.put('/category/:categoryId', categoryUpdateValidator, runValidation, requireSignin, adminMiddleware, update)
router.delete('/category/:slug', requireSignin, adminMiddleware, remove)

module.exports = router




