//Externam Modules
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

const data = fs.readFileSync(`${__dirname}/data/todo.json`, 'utf8');

//Getting request for all Todos
app.get('/todos', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: JSON.parse(data),
  });
});

app.post('/todos', (req, res) => {
  const newTodo = Object.assign();
});

//Listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
