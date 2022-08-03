const { Schema, model } = require("mongoose")
const Days = mongoose.model('Days')
const Recipes = mongoose.model('Recipes')

const MealPlanSchema = new Schema(
    {
      week: {
        type: Schema.ObjectId, ref: 'Days'
    },
        recipe:{
          type: Schema.ObjectId, ref: 'Recipes'
        }
        
      },
)

const MealPlan = model("MealPlan", MealPlanSchema);

module.exports = MealPlan;