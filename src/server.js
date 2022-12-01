import { ApolloServer, gql } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';



// template literal ``  
//type query defines what data we can get from the server
//Scalar(single value) Data Types: String, Int, Float, Boolean, ID
// ! means required, not null
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers

});



server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});