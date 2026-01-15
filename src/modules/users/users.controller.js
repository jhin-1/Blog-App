import express from 'express';
import { sign_up, login, profile_user } from'./users.service.js';
const router = express.Router()

router.post('/auth/sign-up',sign_up)
router.post('/auth/login',login)
router.get('/profile/:id',profile_user)





export default router