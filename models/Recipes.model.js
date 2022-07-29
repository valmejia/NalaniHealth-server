const { Schema, model } = require("mongoose")

const recipesSchema = new Schema(
    {
        name: {
          type: String,
         
        },
        food:{
            type: String,
        },
        ingredients: {
            type: String,
        },
        steps:{
            type: String,
        }
      },
)

const Recipe = model("Recipe", recipesSchema);

module.exports = Recipe;
