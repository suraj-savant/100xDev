const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// Sample get route
app.get("/", (req, res)=>{
    res.send("Hello World this is home page")
})

// Express query parameter http://localhost:3000/query?id=query1
app.get("/query", (req, res)=>{
    let queryParam = req.query.id;
    console.log(typeof queryParam)
    res.send("The query parameter value : " + queryParam)
})


// Express route parametes http://localhost:3000/route/route1
app.get("/route/:id",(req, res)=>{
    let routeParam = req.params.id;
    res.send("Route param value : " + routeParam)
})

// Express body params http//localhost:3000/body
app.get("/body", (req, res)=>{
    let {fname, lname, age} = req.body;
    console.log(typeof age)
    res.status(200).json({
        fname, lname, age
    })

})

// Express get data through the header
app.get("/header", (req, res)=>{
    let data = req.headers;
    res.send(data.authorization)
})



// Understanding middleware http://localhost:3000/middleware?middleware=0

function middleware1(req, res, next) {
    if(req.query.middleware == "1"){
        return res.send("Failed in middleware1")
    }
    next();
    
}


function middleware2(req, res, next) {
    if(req.query.middleware == "2"){
        return res.send("Failed in middleware2")
    }
    next();
    
}


app.get("/middleware", middleware1, middleware2, (req, res)=>{
    res.send("All middleware are sucessfully passed")
})


//Middleware login example http://localhost:3000/login
function login(req, res, next){
    let {username, password} = req.body;
    if(username != "admin" || password != "root"){
        return res.send("Invalid username or password")
    }
    next()
}

app.get("/login", login, (req, res)=>{
    res.send("Login sucessful")
})

app.listen(PORT, ()=>console.log("Server is listening on port "+ PORT))