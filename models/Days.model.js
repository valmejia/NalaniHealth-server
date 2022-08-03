const { Schema, model } = require("mongoose");
const Assessment = mongoose.model('Assessment')
const daysSchema = new Schema({
  sun: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  mon: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  tue: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  wed: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  thu: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  fri: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
  sat: {
    type: Schema.ObjectId, ref: 'Assessment',
  },
});

const Days = model("Days", daysSchema);

module.exports = Days;
