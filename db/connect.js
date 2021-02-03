const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'recipeBook';
let db;

MongoClient.connect(url, function(err, client) {
  if (err) return console.log(err);

  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`)
})

// module.exports.client = new MongoClient(uri);