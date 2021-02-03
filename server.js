const {client} = require('./db/connect');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

// create ingredient records
app.post('/ingredients', function(req, res) {
  console.log('adding an ingredient')
  MongoClient.connect('mongodb://localhost:27017/recipeBook', function(err, db) {
    if (err) throw err;
    db.collection('ingredients', function(err, collection) {
      collection.insert({name: 'chicken', category: 'protein'})
    })
    // db.ingredients.insertOne({
    //   name: 'chicken',
    //   category: 'protein'
    // });
  })
});

// delete ingredient records

// update ingredient records

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});