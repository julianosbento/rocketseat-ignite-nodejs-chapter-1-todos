import express from 'express';
import cors from 'cors';

// import { v4: uuidv4 } from 'uuid';

const app = express();

app.use(cors());
app.use(express.json());

// const users = [];

function checksExistsUserAccount() {
  // Complete aqui
}

app.post('/users', (request, response) => {
  // Complete aqui
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