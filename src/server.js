import { ApolloServer, gql } from 'apollo-server';


// template literal ``  
//type query defines what data we can get from the server
const server = new ApolloServer({
    typeDefs: gql` 
    type Query {
        hello: String,
        name: String,

    }`
});

server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});