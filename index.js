require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const express = require('express')
const app = express()
const port = 5000

const data = [
    {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    }
  ]

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

app.get("/data",(req,res)=>{
    res.json(data)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})