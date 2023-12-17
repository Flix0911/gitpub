//folder for routes

//install express
const express = require("express")

//create a router
const router = express.Router()

//import our drink data
const drinks = require("../models/drinks.js")

//routes

//display drinks data in json
router.get("/", (req, res) => {
    res.send(drinks)
})

//export the router
module.exports = router