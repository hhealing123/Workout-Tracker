const db = require('../config/connection');
const { Workout, User } = require('../models');
const workoutSeeds = require('./workoutSeeds.json');
const userSeed = require('./userSeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeed);
    await Workout.deleteMany({});
    await Workout.create(workoutSeeds);

    for (let i = 0; i < workoutSeeds.length; i++) {
      const { _id} = await Workout.create(workoutSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: userSeed[0].username },
        {
          $addToSet: {
            Workout: _id,
          },
        }
      );
    }
    console.log('Seeding is done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
