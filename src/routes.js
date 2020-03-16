const express = require('express');
const PoetryController = require('./controllers/PoetryController');

const routes = express.Router();

routes.post('/new', PoetryController.store);
routes.get('/', PoetryController.index);
routes.get('/find/:id', PoetryController.find);

module.exports = routes;