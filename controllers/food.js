//folder for food routes

//install express
const express = require("express")

//create a food router
const router2 = express.Router()

//import our food data
const food = require("../models/food.js")

//routes

//render food index page
router2.get("/", (req, res) => {
    res.render("indexF.ejs", {food})
})

//food route to id
router2.get("/:id", (req, res) => {
    const id = req.params.id
    const foods = food[id]
    //id from params
    //send the id as a response
    //no longer need the below
    //res.send(req.params.id)
    res.render("showf.ejs", {foods, id})
})

//export the router
module.exports = router2