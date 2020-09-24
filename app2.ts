import express from 'express';

const app = express();
const port = 8000;

app.get('/xx', (request, response) => {
  response.send('Hello xx!');
});

app.get('/', (request, response) => {
  response.send('Hello Twoheart!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});