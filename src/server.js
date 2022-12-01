import { ApolloServer, gql } from 'apollo-server';


// template literal ``  
//type query defines what data we can get from the server
//Scalar(single value) Data Types: String, Int, Float, Boolean, ID
// ! means required, not null
const server = new ApolloServer({
    typeDefs: gql` 
    type Query {
        user: User,
        users: [User]
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
            },
            users: () => {
                return [{
                    id: '1',
                    name: 'mdss',
                    email: 'mdss@mdss.com',
                    age: 28,
                },
                {
                    id: '2',
                    name: 'mdss2',
                    email: 'mdss2@mdss.com',
                    age: 29,
                }]
            }
        },
    },
});



server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});