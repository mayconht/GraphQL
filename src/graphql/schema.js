import { gql } from 'apollo-server-express';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';

export const rootTypeDefs = gql`
    type Query {
        _empty: Boolean
    }
   `;

const rootResolvers = {
    Query: {
        _empty: () => true
    }
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];