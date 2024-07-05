// import the mongoose model

const mongoose = require("mongoose")
require("dotenv").config()


//Connect to the Database
await mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connection sucessfull"))
    .catch((err) => console.log("Error in connection"))

// Create a user Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

// Create a user model

const User = mongoose.model("users", userSchema)




// Create a user object and save the record

const user = new User({ username: "admin", password: "password" })

user.save()
    .then((data) => console.log("User Saved sucessfully " + data))
    .catch((err) => console.log("Error is saving data " + err))






