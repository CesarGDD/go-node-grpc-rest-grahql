import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blog = {
  __typename?: 'Blog';
  content: Scalars['String'];
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createUser: User;
  deleteBlog: Blog;
  deleteUser: User;
};


export type MutationCreateBlogArgs = {
  input: NewBlog;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};

export type NewBlog = {
  content: Scalars['String'];
  userId: Scalars['Int'];
};

export type NewUser = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getBlog: Blog;
  getBlogByUserId: Array<Blog>;
  getBlogs: Array<Blog>;
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetBlogArgs = {
  id: Scalars['Int'];
};


export type QueryGetBlogByUserIdArgs = {
  userId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  blogs: Array<Blog>;
  id: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type GetBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogsQuery = { __typename?: 'Query', getBlogs: Array<{ __typename?: 'Blog', id: number, userId: number, content: string, user: { __typename?: 'User', username: string } }> };

export type GetUserQueryVariables = Exact<{
  getUserId: Scalars['Int'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: number, username: string, blogs: Array<{ __typename?: 'Blog', id: number, content: string, userId: number }> } };

export type CreateBlogMutationVariables = Exact<{
  input: NewBlog;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'Blog', userId: number, id: number, content: string, user: { __typename?: 'User', username: string } } };

export type CreateUserMutationVariables = Exact<{
  input: NewUser;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, username: string } };

export const GetBlogsDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class GetBlogsGQL extends Apollo.Query<GetBlogsQuery, GetBlogsQueryVariables> {
        // @ts-ignore
    document = GetBlogsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
        // @ts-ignore
    document = GetUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBlogDocument = gql`
    mutation CreateBlog($input: NewBlog!) {
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

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBlogGQL extends Apollo.Mutation<CreateBlogMutation, CreateBlogMutationVariables> {
        // @ts-ignore
    document = CreateBlogDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($input: NewUser!) {
  createUser(input: $input) {
    id
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    // @ts-ignore
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }