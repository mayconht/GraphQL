import {gql} from 'apollo-server-express';

export const userTypeDefs = gql`
    extend type Query {   
        user(id: ID!): User!,
        users: [User]
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
        createUser(Id: ID!): User!
    }
`;