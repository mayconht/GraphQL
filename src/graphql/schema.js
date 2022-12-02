import { gql } from 'apollo-server-express';
import { userTypeDefs } from './user/typeDefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './posts/typeDefs';
import { postResolvers } from './posts/resolvers';

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

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];