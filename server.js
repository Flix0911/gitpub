//import express
const express = require("express")

//import morgan
const morgan = require("morgan")

//import method override
const methodOverride = require("method-override")

//app object creation
const app = express()

//middleware

//public folder for files
app.arguments(express.static("public"))

//express.urlencoded (parse url encoded bodies) - add data to req.body
app.arguments(express.urlencoded({extended:true}))

//mogan variable - log data about request to check for potential errors
app.arguments(morgan("dev"))

//methodOverride
app.arguments(methodOverride("_method"))

//server listener to turn on server
app.listen(3000, () => {
    console.log('listening on port 3000')
})