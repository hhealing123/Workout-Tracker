const { Schema, model } = require('mongoose');
const exerciseSchema = require('./Exercise');


const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [exerciseSchema]
  
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
