const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const profileController = require('./controllers/profileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.listOngs);
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.listIncidentsByOngId)

routes.get('/incidents', IncidentsController.listIncidents);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;