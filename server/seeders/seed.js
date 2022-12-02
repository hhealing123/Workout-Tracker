const db = require('../config/connection');
const { Workouts } = require('../models');
const workoutSeeds = require('./workoutSeeds.json');

db.once('open', async () => {
  try {
    await Workouts.deleteMany({});
    await Workouts.create(workoutSeeds);

    console.log('Seeding is done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
