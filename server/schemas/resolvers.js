const { Workouts, User, } = require('../models');

const resolvers = {
  Query: {
    Workouts: async () => {
      return Workouts.find({});
    },
    Exercise: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Workouts.find(params);
    },
  },
  Mutation: {
    createWorkout: async (parent, args) => {
      const workouts = await Workouts.create(args);
      return workouts;
    }
  },
};

module.exports = resolvers;
