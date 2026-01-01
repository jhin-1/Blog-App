const express = require('express')
const { sign_up, login, profile_user } = require('./users.service')
const router = express.Router()

router.post('/auth/sign-up',sign_up)
router.post('/auth/login',login)
router.get('/profile/:id',profile_user)





module.exports = router