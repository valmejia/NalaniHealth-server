const router = require("express").Router();
const mongoose = require("mongoose");
const recipeModel = require("../models/Recipes.model")

router.post("/", (req,res) => {
    const {body} = req;
})
  
  
  module.exports = router;