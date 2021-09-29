const express = require('express');
const routes = require('./routes');

const app = express();

// falando para o node usar o ejs como viewengine,
// devemos usar render no lugar de send para exibir em tela
// TODO:  achar um modo de apontar o view para uma pasta dentro de src
app.set('view engine', 'ejs');
// definindo que podemos usar arquivos estaticos e a pasta que os armazenará
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
