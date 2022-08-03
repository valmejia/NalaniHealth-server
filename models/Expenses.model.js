const { Schema, model, default: mongoose } = require("mongoose")
const Days = mongoose.model('Days')
const expensesSchema = new Schema(
    {
        week: {
            type: Schema.ObjectId, ref: 'Days'
        },
        budget:{
            type: Number,
        },
     },
)

const Expenses = model("expenses", expensesSchema);

module.exports = Expenses;