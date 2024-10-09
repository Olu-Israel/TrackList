//Required Modules
const express = require('express');
const app = express();
const fs = require('fs');

const port = 3000;

app.use(express.json());

//Reading Files
const data = fs.readFileSync(`${__dirname}/data/todo.json`, 'utf8');

//Getting all Todos from JSON file and sending it as response
app.get('/todos', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: JSON.parse(data),
  });
});

//Creating a new Todo and adding it to JSON file
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  console.log(newTodo);

  fs.writeFile(
    `${__dirname}/data/todo.json`,
    JSON.stringify(newTodo),
    (err) => {}
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
