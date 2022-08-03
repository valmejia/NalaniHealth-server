const { Schema, model } = require("mongoose")
const AssessmentSchema = new Schema(
    {
        assessment: {
            type: Boolean,
        },
     },
)

const Assessment = model("Assessment", AssessmentSchema);

module.exports = Assessment;