//Required Modules
const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;

app.use(express.json());

app.get('/todos', (req, res) => {
  fs.readFile(`${__dirname}/data/todo.json`, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data from file' });
    }
  });

  res.status(200).json({
    status: 'Success',
    data: JSON.parse(data),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
