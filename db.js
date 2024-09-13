import { MongoClient } from 'mongodb';
import 'dotenv/config';

const connectingString = process.env.ATLAS_URI || '';
console.log(connectingString);

const client = new MongoClient(connectingString);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('sample_training');
    export default db;
  } catch (e) {
    console.error('Failed to connect to MongoDB', e);
  }
}

connectToDatabase();
