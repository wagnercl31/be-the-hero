const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

//rota de login
routes.post('/sessions', sessionController.create);

// listagem
routes.get('/ongs', ongController.index);
routes.get('/profile', profileController.index);
routes.get('/incidents', incidentController.index);

 // cadastro
routes.post('/ongs', ongController.create);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;