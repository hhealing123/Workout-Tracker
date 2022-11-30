const db = require('../config/connection');
const { Excersise } = require('../models');
const exerciseSeeds = require('./excerciseSeeds.json');

db.once('open', async () => {
  try {
    await Excersise.deleteMany({});
    await Excersise.create(exerciseSeeds);

    console.log('Seeding is done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
