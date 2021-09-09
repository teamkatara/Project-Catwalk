const express = require('express');
const path = require('path');

// Test Demo Router
var router = require('./routes/test.js');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
