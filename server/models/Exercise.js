const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  muscleWorked: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 200,
  },
  equipment: {
    type: String,
  },
});

module.exports = workoutSchema;
