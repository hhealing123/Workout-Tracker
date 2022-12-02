const { Schema, model } = require('mongoose');



const workoutSchema = new Schema({
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
  reps:{
    type: Integer,
  },
  weight:{
    type: Integer
  }
  
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
