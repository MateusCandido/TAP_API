const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Course = mongoose.model("Curso", CourseSchema);
module.exports = Course;