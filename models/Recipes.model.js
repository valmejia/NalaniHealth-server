const { Schema, model } = require("mongoose")

const recipesSchema = new Schema(
    {
        name: {
          type: String,
          required: true,
        },
        food:{
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        steps:{
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        fav:{
            type: Boolean,
        }
      },
)

const Recipe = model("Recipe", recipesSchema);

module.exports = Recipe;
