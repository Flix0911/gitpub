//folder for drink routes

//install express
const express = require("express")

//create a drink router
const router = express.Router()

//import our drink data
const drinks = require("../models/drinks.js")

//routes

//render drinks index page
router.get("/", (req, res) => {
    res.render("indexD.ejs", {drinks})
})

//drinks route to id
router.get("/:id", (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    res.render("showD.ejs", {drink, id})
})

//export the router
module.exports = router