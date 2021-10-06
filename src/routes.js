const express = require('express');
const AnswerController = require('./app/controllers/AnswerController');
const AsksController = require('./app/controllers/AsksController');

const router = express();

router.get('/', (request, response) => {
  AsksController.index(request, response);
});

router.get('/ask', (request, response) => {
  response.render('pages/toAsk');
});

router.get('/ask/:id', (request, response) => {
  AsksController.show(request, response);
});

router.post('/ask', (request, response) => {
  AsksController.store(request, response);
});

router.get('/answer/:id', (request, response) => {
  AnswerController.show(request, response);
});

router.post('/answer/:id', (request, response) => {
  AnswerController.store(request, response);
});

module.exports = router;
