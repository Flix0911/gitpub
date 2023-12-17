//folder for routes

//install express
const express = require("express")

//create a router
const router = express.Router()

//import our drink data
const drinks = require("../models/drinks.js")

//routes

//render drinks index page
router.get("/", (req, res) => {
    res.render("index.ejs", {drinks})
})

//drinks route to id
router.get("/:id", (req, res) => {
    //id from params
    //send the id as a response
    res.send(req.params.id)
})

//export the router
module.exports = router