import "dotenv/config";
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import  DatabaseBootstrap from './database';


// template literal ``  
//type query defines what data we can get from the server
//Scalar(single value) Data Types: String, Int, Float, Boolean, ID
// ! means required, not null
const server = new ApolloServer({
    typeDefs,
    resolvers,

});

server.listen(4000).then(({ url }: any) => {
    new DatabaseBootstrap().bootstrap();
    console.log(`Server ready at ${url}`);
});