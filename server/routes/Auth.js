import express from 'express'
import {UserSignup,UserSignin,googleAuth} from "../controllers/Auth.js"

const router = express.Router()

//create user
router.post("/signup",UserSignup)

//sign in
router.post("/signin",UserSignin)

//google auth
router.post("/google",googleAuth)


export default router
