const router = require("express").Router();
const mongoose = require("mongoose");
const Assessment = require("../models/Assessment.model");

router.get("/toDoToday", async (req, res) => {
  try {
    const foods = await Assessment.find();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Assessment.findById(id);
    res.json(food);
  } catch (err) {
    console.log(err);
  }
});

//post
router.post("/toDoTodayForm", (req, res) => {
  const { body } = req;
  console.log(body);

 Assessment.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///update
router.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

 Assessment.findByIdAndUpdate(id, body)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
});

///delete
router.delete('/delete/:id', (req, res) =>{
  const { id } = req.params;
  Assessment.findByIdAndDelete(id)
  .then((result) => {
    Assessment.find()
    .then((result)=>{
      res.json(result);
    })
    
  })
  .catch(console.log);
});
module.exports = router;
