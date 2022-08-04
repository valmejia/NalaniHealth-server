const router = require("express").Router();
const mongoose = require("mongoose");
const ProductsAmount = require('../models/Food.model')

router.get("/foodExpensesTracker", async (req, res) => {
    try {
      const expenses = await ProductsAmount.find();
      res.json(expenses);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await ProductsAmount.findById(id);
      res.json(expense);
    } catch (err) {
      console.log(err);
    }
  });
  
  //post
  router.post("/foodExpensesForm", (req, res) => {
    const { body } = req;
    console.log(body);
  
    ProductsAmount.create(body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });
  
  //edit
  router.put("/:id", (req, res) => {
    const { body } = req;
    const { id } = req.params;
  
    console.log(body);
  
    ProductsAmount.findByIdAndUpdate(id, body)
      .then((result) => {
        res.json(result);
      })
      .catch(console.log);
  });
  
  //delete
  router.delete('/delete/:id', (req, res) =>{
    const { id } = req.params;
    ProductsAmount.findByIdAndUpdate(id)
    .then((result) => {
      res.json(result);
    })
    .catch(console.log);
  });

  module.exports = router;