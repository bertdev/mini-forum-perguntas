const express = require('express');

const router = express();

router.get('/', (request, response) => {
  response.render('pages/index');
});

router.get('/ask', (request, response) => {
  response.render('pages/ask');
});

router.post('/ask', (request, response) => {
  console.log(request.body);
  response.send('amigo estou aqui');
});

module.exports = router;
