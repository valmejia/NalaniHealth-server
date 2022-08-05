const { Schema, model } = require("mongoose")
const AssessmentSchema = new Schema(
    {
       name: {
            type: String,
        },
        priority: {
            type: String,
        },
     },
)

const Assessment = model("Assessment", AssessmentSchema);

module.exports = Assessment;