const { Schema, model } = require("mongoose");

const MealPlanSchema = new Schema({
  days: {
    type: String,
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipes",
  },
  assessment: {
    type: String,
  },
  date: {
    type: Date,
  },
  food: {
    type: String,
  },
});

const MealPlan = model("MealPlan", MealPlanSchema);

module.exports = MealPlan;
