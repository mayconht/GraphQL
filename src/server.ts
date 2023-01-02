import "dotenv/config";
import { ApolloServer } from 'apollo-server';
import schema from "./schema";
import DatabaseBootstrap from './database';

async function bootstrap() {
    const server = new ApolloServer({ schema: await schema });
    return server;
}

bootstrap().then((server: ApolloServer) => {
    server.listen(4000).then(({ url }: any) => {
        new DatabaseBootstrap().bootstrap();
        console.log(`Server ready at ${url}`);
    });
});


