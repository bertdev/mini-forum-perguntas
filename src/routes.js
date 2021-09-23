const express = require('express');

const router = express();

router.get('/', (request, response) => {
  response.render('pages/index');
});

router.get('/ask', (request, response) => {
  response.render('pages/ask');
});

module.exports = router;
