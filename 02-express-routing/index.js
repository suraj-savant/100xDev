const express = require("express")
const homeRoute = require("./router/homeRouter")
const authRoute = require("./router/auth")

const app = express()

app.use("/", homeRoute)
app.use("/auth", authRoute)

app.listen(3000, ()=>console.log("Server running at port 3000"))
