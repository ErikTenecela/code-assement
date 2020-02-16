const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subjectCount: {
    type: Number,
    required: true
  },
  scoreAverage: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
