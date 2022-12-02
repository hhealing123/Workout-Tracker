const db = require('../config/connection');
const { Workout } = require('../models');

const techData = require('./Workouts.json');

db.once('open', async () => {
  await Workout.deleteMany({});

  const Workouts = await Workout.insertMany(Workouts);

  console.log('Workouts seeded!');
  process.exit(0);
});
