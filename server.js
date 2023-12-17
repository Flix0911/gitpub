//import express
const express = require("express")

//import morgan
const morgan = require("morgan")

//import method override
const methodOverride = require("method-override")

//import drinks' router
const drinksRouter = require("./controllers/drinks.js")

//import our drinks - is this necessary?
const drinks = require("./models/drinks.js")

//app object creation
const app = express()

//middleware

//public folder for files
app.use(express.static("public"))

//express.urlencoded (parse url encoded bodies) - add data to req.body
app.use(express.urlencoded({extended:true}))

//mogan variable - log data about request to check for potential errors
app.use(morgan("dev"))

//methodOverride
app.use(methodOverride("_method"))

//register drinksRouter
app.use("/drinks", drinksRouter)

//routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Gitpub App!</h1>")
})

//server listener to turn on server
app.listen(3000, () => {
    console.log('listening on port 3000')
})