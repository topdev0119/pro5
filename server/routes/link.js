const express = require('express')

const router = express.Router()

const { linkCreateValidator, linkUpdateValidator } = require('../validators/link')

const { requireSignin, authMiddleware } = require('../controllers/auth')

const { runValidation } = require('../validators')

const { create, list, read, remove, update } = require('../controllers/link')


router.post('/link', linkCreateValidator, runValidation, requireSignin, authMiddleware, create)
router.get('/links', list)
router.get('/link/:slug', read)
router.put('/link/:categoryId', linkUpdateValidator, runValidation, requireSignin, authMiddleware, update)
router.delete('/link/:slug', requireSignin, authMiddleware, remove)

module.exports = router