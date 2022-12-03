const { gql } = require('apollo-server-express');

// Check if it should be "Number" or "Int" for data type
// Refer to 21-Mern (Module 24)
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workout: [Workout]!
  }

  type Workout {
    _id: ID
    createdAt: String
    exercise: [Exercise]!
  }

  type Exercise {
    _id: ID
    workout_name: String
    muscles_worked: String
    equipments: String
    description: String
    sets: Int
    reps: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    workout(username: String): [Workout]
    workout(workoutId: ID!): Workout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(
      workoutId: ID!
      workout_name: String!
      muscles_worked: String!
      equipments: String!
      description: String!
      sets: Int
      reps: Int
    ): Workout
    removeWorkout(workoutId: ID!): Workout
  }
`;

module.exports = typeDefs;