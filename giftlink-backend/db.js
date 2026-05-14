const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URL;  // MONGO_URL in your .env
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    return client.db('giftdb');  // replace 'giftdb' with your DB name if different
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

module.exports = { connectToDatabase, client };
