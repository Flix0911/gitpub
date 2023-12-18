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
    const id = req.params.id
    const drink = drinks[id]
    //id from params
    //send the id as a response
    //no longer need the below
    //res.send(req.params.id)
    res.render("show.ejs", {drink, id})
})

//export the router
module.exports = router