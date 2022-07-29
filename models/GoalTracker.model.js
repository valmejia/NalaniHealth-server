const { Schema, model } = require("mongoose")

const goalTrackerSchema = new Schema(
    {
        name: {
          type: String,
         required: true, 
        },
        assessment:{
            type: Number,
            required: true,
        },
        toDo:{
            type: Boolean,
        },
        week: {
            type: String,
        },
        
      },
)

const GoalTracker = model("GoalTracker", goalTrackerSchema);

module.exports = GoalTracker;