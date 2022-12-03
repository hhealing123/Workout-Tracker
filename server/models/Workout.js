const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema({
  group_id: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  exercise: [
    {
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
    },
  ],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
