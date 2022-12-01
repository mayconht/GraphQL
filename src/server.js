import { ApolloServer, gql } from 'apollo-server';


// template literal ``  
//type query defines what data we can get from the server
//Scalar(single value) Data Types: String, Int, Float, Boolean, ID
// ! means required, not null
const server = new ApolloServer({
    typeDefs: gql` 
    type Query {
        user: User
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        }
    `,
    resolvers: {
        Query: {
            user: () => {
                return {
                    id: '1',
                    name: 'mdss',
                    email: 'mdss@mdss.com',
                    age: 28,
                }
            }
        },
    },
});



server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});