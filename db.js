// db.js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

// MongoDB connection string
const connectingString = process.env.ATLAS_URI || '';
console.log(connectingString);

const client = new MongoClient(connectingString);

// Variable to store the database instance
let db;

// Function to connect to MongoDB and initialize the database variable
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('sample_training');
  } catch (e) {
    console.error('Failed to connect to MongoDB', e);
  }
}

// Immediately invoke the connection function
connectToDatabase();

// Export the database instance
export { db };
