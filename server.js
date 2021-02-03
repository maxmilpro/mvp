const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});