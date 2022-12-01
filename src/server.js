import { ApolloServer, gql } from 'apollo-server';


// template literal ``  
//type query defines what data we can get from the server
//Scalar(single value) Data Types: String, Int, Float, Boolean, ID
// ! means required, not null
const server = new ApolloServer({
    typeDefs: gql` 
    type Query {
        hello: String!
        name: String!
        arrayString: [String!]!

    }`,
    resolvers: {
        Query: {
            hello: () => {
                return 'Hello world!';
            },
            name: () => {
                return "Maycon's code!";
            },
            arrayString: () => {
                return ['Hello', 'World'];
            }
        },
    },
});



server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});