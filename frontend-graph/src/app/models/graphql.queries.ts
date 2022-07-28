import { gql } from 'apollo-angular';

export const GET_BLOGS = gql`
  query GetBlogs {
    getBlogs {
      id
      userId
      content
      user {
        username
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($getUserId: Int!) {
    getUser(id: $getUserId) {
      id
      username
      blogs {
        id
        content
        userId
      }
    }
  }
`;
