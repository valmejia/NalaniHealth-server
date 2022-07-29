const { Schema, model } = require("mongoose")

const MealPlanSchema = new Schema(
    {
        week: {
          type: String,
          required: true,
        },
        assessment:{
            type: String,
            required: true,
        },
        recipe:{
            type: String,
            required: true,
        }
        
      },
)

const MealPlan = model("MealPlan", MealPlanSchema);

module.exports = MealPlan;