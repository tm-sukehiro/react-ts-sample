const path = require('path');
const express = require('express');
const app = express();
const sleep = require('sleep');

app.use('/dist', express.static('dist'));

app.get('/api/count', (req, res) => {
  res.contentType('application/json');
  const obj = {"amount": 100};
  sleep.sleep(1);
  res.json(obj);
});

app.get('/api/todos/all', (req, res) => {
  res.contentType('application/json');
  const todos = [
    {id: 1, text: "todo 1", isComplete: false},
    {id: 2, text: "todo 2", isComplete: false}
  ];
  res.json(todos);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server start at port 3000");
});