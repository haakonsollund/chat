const http = require("http")
const express = require("express")
const server = http.createServer(app)
const app = express()


app.get("/index", (req, res) => {
    res.send("welcome home")
})

server.on("error", (err) =>{
    console.log("trouble opening server")
})

server.listen(8080, () => {
    console.log("server working on port 8001")
})