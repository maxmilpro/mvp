const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'recipeBook';

const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect();

// get all ingredients from the db
exports.get = async function() {
  try {
    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const findResult = await collection.find();
    return await findResult.toArray();
  } finally {
    // await client.close();
  }
}

// insert ingredient into the db
exports.add = async function(ingredient) {
  try {
    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const doc = { name: ingredient.name, quantity: ingredient.quantity, category: ingredient.category, meal: ingredient.meal};
    const result = await collection.insertOne(doc);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
    );
  } finally {
    // await client.close();
  }
}

// delete an ingredient from the db
exports.delete = async function(ingredient) {
  try {
    const database = client.db(dbName);
    const collection = database.collection('ingredients');
    const query = { _id: mongoose.Types.ObjectId(ingredient.id)};
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 1) {
      console.dir('Successfully deleted one document');
    } else {
      console.log('No documents matched the query. Deleted 0 documents');
    }
  } catch (err) {
    console.log(err);
  }
}


// add({name: 'steak', category: 'protein'}).catch(console.dir);
// get().catch(console.dir);
