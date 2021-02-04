const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'recipeBook';

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const doc = { name: 'chicken', category: 'protein' };
    const result = await collection.insertOne(doc);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );
  } finally {
    await client.close();
  }
}

// run().catch(console.dir);