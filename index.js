require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("hello tri")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please login at .........</h1>")
})

app.get("/yt",(req,res)=>{
    res.send("<h3>Hellooooooooooo</h3>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})