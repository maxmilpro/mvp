const db = require('./db/connect');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');
const express = require('express');
const port = 3001;

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


// get ingredients
app.get('/ingredients', function(req, res) {
  db.get()
  .then((result) => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  })
})

// create ingredient
app.post('/ingredients', function(req, res) {
  db.add(req.body)
  .then(() => {
    res.end();
  })
  .catch((err) => {
    console.log(err);
  })
});

// delete ingredient
app.post('/removeingredient', function(req, res) {
  db.delete(req.body)
  .then(() => {
    res.end();
  })
  .catch((err) => {
    console.log(err);
  });
});

// update ingredient

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});