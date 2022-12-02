const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
  workout_name: {
    type: String,
    required: true,
    unique: true,
  },
  muscles_worked: {
    type: String,
    required: true,
  },
  equipments: {
    type: String,
    require: true
  },
  description: {
    type: String,
    maxLength: 200,
    unique: true,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;