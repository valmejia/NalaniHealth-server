const router = require("express").Router();
const mongoose = require("mongoose");
const MealPlan = require("../models/MealPlan.models");

router.get("/mealPlan", async (req, res) => {
  try {
    const foods = await MealPlan.find();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await MealPlan.findById(id);
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

//post
router.post("/mealPlanForm", (req, res) => {
  const { body } = req;
  console.log(body);

  MealPlan.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///update
router.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;


  MealPlan.findByIdAndUpdate(id, body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///delete
router.delete('/delete/:id', (req, res) =>{
  const { id } = req.params;
  MealPlan.findByIdAndDelete(id)
  .then((result) => {
    MealPlan.find()
    .then((result)=>{
      res.json(result);
    })
    
  })
  .catch(console.log);
});
module.exports = router;
