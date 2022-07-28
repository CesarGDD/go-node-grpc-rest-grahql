import { gql } from 'apollo-angular';

const CREATE_USER = gql`
  mutation Mutation($input: NewUser!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

const CREATE_BLOG = gql`
  mutation Mutation($input: NewBlog!) {
    createBlog(input: $input) {
      userId
      id
      content
      user {
        username
      }
    }
  }
`;

export { CREATE_BLOG, CREATE_USER }