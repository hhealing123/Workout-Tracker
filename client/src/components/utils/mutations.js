import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
mutation addWorkout($exercise : [Exercises]!) {
  addWorkout(exercise: $exercise){
    createdAt
    exercise {
      workout_name
      muscles_worked
      equipments
      description
      sets
      reps
      weight
    }

  } 
}
`
