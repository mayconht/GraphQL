import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts: [Post!]!
  }

  input PostInput {
    title: String!
    body: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    createdAt: String!
    unixTimestamp: String
  }

  extend type Mutation {
    createPost(input: PostInput!): Post!
    updatePost(id: ID!, input: PostInput!): Post!
  }
`;