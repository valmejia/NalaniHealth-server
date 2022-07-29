const { Schema, model } = require("mongoose")

const foodsSchema = new Schema(
    {
        name: {
          type: String,
         
        },
        amount:{
            type: Number,
        },
        ingredients: {
            type: String,
        },
        steps:{
            type: String,
        }
      },
)

const Food = model("Food", foodsSchema);

module.exports = Food;
