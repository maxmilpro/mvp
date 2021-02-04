const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'recipeBook';

const client = new MongoClient(url);

// get all ingredients from the db
let get = async function() {
  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const findResult = await collection.find();
    await findResult.forEach(console.dir);
  } finally {
    await client.close();
  }
}

// insert ingredient into the db
let add = async function(ingredient) {
  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const doc = { name: ingredient.name, category: ingredient.category};
    const result = await collection.insertOne(doc);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );
  } finally {
    await client.close();
  }
}

// add({name: 'steak', category: 'protein'}).catch(console.dir);
// get().catch(console.dir);
