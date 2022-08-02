const router = require("express").Router();
const mongoose = require("mongoose");
const Recipe = require("../models/Recipes.model");
const recipeModel = require("../models/Recipes.model");

router.get("/recipeIdeasForm", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Recipe.findById(id);
    res.json(recipes);
  } catch (err) {
    console.log(err);
  }
});

//post
router.post("/recipeIdeasList", (req, res) => {
  const { body } = req;
  console.log(body);

  Recipes.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

router.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  console.log(body);

  Recipe.findByIdAndUpdate(id, body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

module.exports = router;
