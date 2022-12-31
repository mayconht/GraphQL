import { gql } from 'apollo-server-express';
import {typeDefs as animalTypeDefs, resolvers as animalResolvers} from './animals';



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

export const typeDefs = [rootTypeDefs, animalTypeDefs];
export const resolvers = [rootResolvers, animalResolvers];