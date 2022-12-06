import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query getWorkout {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;