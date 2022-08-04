const { Schema, model } = require("mongoose")

const foodsSchema = new Schema(
    {
        name: {
          type: String,
         required: true,
        },
        product: {
          type: String,
          required: true,
        },
        amount:{
            type: Number,
         
        },
        fav:{
            type: Boolean,
            
        }
      },
)

const Food = model("Food", foodsSchema);

module.exports = Food;
