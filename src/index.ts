import express from 'express';
import cors from 'cors';

import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(cors());
app.use(express.json());

type User = {
  id: string;
  name: string;
  username: string;
  todos: Array<any>;
}

const users: Array<User> = [];

function checksExistsUserAccount() {
  // Complete aqui
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userExists = users.find((user) => user.name === name);

  if (userExists) response.status(400).json({ error: 'User already exists!' });

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(user);

  response.status(201).json(user);
});

app.get('/todos', (request, response) => {
  response.send({ success: 'Hello World!' })
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

export default app;