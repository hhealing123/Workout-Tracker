const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('workouts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('workouts');
    },
    workouts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Workout.find(params).sort({ createdAt: -1 });
    },
    workout: async (parent, { workoutId }) => {
      return Workout.findOne({ _id: workoutId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User was not found with this email... Please try again!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Please check the credentials!');
      }

      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (parent, { workoutId, workout_name, muscles_worked, equipments, description, sets, reps }) => {
      const workout = await Workout.create({ workoutId, workout_name, muscles_worked, equipments, description, sets, reps });

      await User.findOneAndUpdate(
        { _id: workoutId },
        // Check this part 
        { 
          $addToSet: { exercise: { workoutId, workout_name, muscles_worked, equipments, description, sets, reps } }, 
        },
        {
          new: true,
          runValidators: true,
        }
      );

      return workout;
    },
    removeWorkout: async (parent, { workoutId }) => {
      return Workout.findOneAndDelete({ _id: workoutId });
    },
  },
};

module.exports = resolvers;
