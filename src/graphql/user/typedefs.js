import {gql} from 'apollo-server-express';

export const userTypeDefs = gql`
    extend type Query {   
        user: User,
        users: [User]
    }

    type User{
        id: ID!,
        name: String!,
        email: String!,
        age: Int!
    }
`;