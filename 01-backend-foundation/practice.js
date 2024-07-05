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
    res.send("The query parameter value : " + queryParam)
})


// Express route parametes http://localhost:3000/route/route1
app.get("/route/:id",(req, res)=>{
    let routeParam = req.params.id;
    res.send("Route param value : " + routeParam)
})

// Express body params http//localhost:3000/body
app.get("/body", (req, res)=>{
    let data = req.body;
    res.json(data)

})


app.listen(PORT, ()=>console.log("Server is listening on port "+ PORT))