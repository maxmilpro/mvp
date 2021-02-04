const db = require('./db/connect');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

// get ingredients
app.get('/ingredients', function(req, res) {
  db.get()
  .then((result) => {
    res.send(result);
  })
})

// create ingredient
app.post('/ingredients', function(req, res) {
  db.add({name: 'steak', category: 'protein'})
  .then(() => {
    res.end();
  })
});

// delete ingredient

// update ingredient

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});