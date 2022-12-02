import {gql} from 'apollo-server-express';

export const userTypeDefs = gql`
    extend type Query {   
        user: User,
        users: [User]
    }

    type User{
        id: ID!,
        firstName: String!,
        lastName: String!,
        username: String!,
        indexRef: Int,
        createdAt: String,
    }
`;