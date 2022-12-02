import {gql} from 'apollo-server-express';

export const userTypeDefs = gql`
    extend type Query {   
        user(id: ID!): User!,
        users: [User]
    }

    input UserInput {
        name: String!
        email: String!
        userName: String!
    }


    type User{
        id: ID!,
        firstName: String,
        lastName: String,
        username: String,
        indexRef: Int,
        createdAt: String,
    }

    extend type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
    }
`;