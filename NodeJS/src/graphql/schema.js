import { gql } from 'apollo-server-express';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typeDefs';
import { postResolvers } from './post/resolvers';

export const rootTypeDefs = gql`
    type Query {
        _empty: Boolean
    }
    type Mutation {
        _empty: Boolean
    }
   `;

const rootResolvers = {
    Query: {
        _empty: () => true
    },

    Mutation: {
        _empty: () => true
    }
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];