//Externam Modules
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

//Listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
