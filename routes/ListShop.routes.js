const router = require("express").Router();
const mongoose = require("mongoose");
const FoodShop = require("../models/Food.model");

router.get("/foodShoppingList", async (req, res) => {
  try {
    const foods = await FoodShop.find();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await FoodShop.findById(id);
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

//post
router.post("/foodShopForm", (req, res) => {
  const { body } = req;
  console.log(body);

  FoodShop.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///update
router.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  console.log(body);

  FoodShop.findByIdAndUpdate(id, body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///delete
router.delete('/delete/:id', (req, res) =>{
  const { id } = req.params;
  FoodShop.findByIdAndUpdate(id)
  .then((result) => {
    res.json(result);
  })
  .catch(console.log);
});
module.exports = router;
