import { MongoClient } from 'mongodb';
import { boolean } from 'zod';
interface optionsj {

  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const dbUrl = process.env.MONGODB_URI;
if (!dbUrl) {
  throw new Error('MONGODB_URI is not defined');
}

const client = new MongoClient(dbUrl, {
  useNewUrlParser  : true,
  useUnifiedTopology: true,
});

async function connectToDb(): Promise<MongoClient> {
  try {
    await client.connect();
    console.log('MongoDB connected successfully!');
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // Re-throw the error for handling in your application
  }
}

export default connectToDb;
