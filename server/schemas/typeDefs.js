const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Workouts {
    _id: ID!
    exercise: [Exercise]
    description: String!
    equipment: String!
    reps: Int
    sets: Int
  }

  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Query {
    Workouts: [Workouts]
    Exercise(_id: String): [Exercise]
  }

  type Mutation {
    createWorkout(description: String!, equipment: String!, reps: Int, sets: Int): Exercise
  }
`;

module.exports = typeDefs;
