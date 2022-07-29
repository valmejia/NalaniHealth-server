const { Schema, model } = require("mongoose")

const foodsSchema = new Schema(
    {
        name: {
          type: String,
         
        },
        amount:{
            type: Number,
        },
        week: {
            type: String,
        },
        budget:{
            type: Number,
        },
      },
)

const Food = model("Food", foodsSchema);

module.exports = Food;
