import mongoose from 'mongoose';

export default class DatabaseBootstrap {
  DBURI: string;
  
  constructor() {
    this.DBURI = process.env.DB_CONNECTION_STRING as string;
  }

  public async bootstrap(): Promise<void> {
    try {
        mongoose.set('strictQuery', true); //Suppresses warnings about using strictQuery
        await mongoose.connect(
            this.DBURI
        );
        console.error('Database connected successfully');
    } catch (err) {
        console.error('Unable to connect to the database. Error:', err);
    }
  }
}

//docker run -d -t -p 27017:27017 --name mongo_graphql mongo
//mongodb://localhost:27017
