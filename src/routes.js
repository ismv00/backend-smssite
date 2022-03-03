const express = require('express');
const routes = express.Router();
const UsersControllers = require('./controllers/UsersControllers');


routes.get('/users', UsersControllers.index);
routes.post('/users', UsersControllers.create);
routes.delete('/users/:id', UsersControllers.delete);



module.exports = routes;