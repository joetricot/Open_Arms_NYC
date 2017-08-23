const express = require('express');
const shelterRoutes = express.Router();
const shelterController = require('../controllers/shelter-controller');

shelterRoutes.get('/', shelterController.index);
shelterRoutes.post('/', shelterController.create);

shelterRoutes.get('/:id',shelterController.show);

shelterRoutes.get('/:id/rating',shelterController.getRating);
shelterRoutes.put('/:id/rating',shelterController.addRating);

module.exports = shelterRoutes;