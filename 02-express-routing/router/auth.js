const express = require("express")

const router = express.Router()


// http://localhost:3000/auth/
router.get("/", (req, res)=>{
    res.send("This is the /auth")
})


// http://localhost:3000/auth/signup
router.get("/signup", (req, res)=>{
    res.send("This is the /auth/signup")
})


// http://localhost:3000/auth/login
router.get("/login", (req, res)=>{
    res.send("This is the /auth/login")
})

module.exports = router