const express = require("express")
const router = express.Router()


// http://localhost:3000/
router.get("/", (req, res) =>{
    res.send("This is / route")
})


// http://localhost:3000/post
router.get("/post", (req, res) =>{
    res.send("This is /post route")
})

module.exports = router


