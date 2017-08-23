const express = require('express');
const mealRoutes = express.Router();
const mealController = require('../controllers/meal-controller');

mealRoutes.get('/',mealController.index);

mealRoutes.get('/:id',mealController.show);

mealRoutes.get('/:id/rating',mealController.getRating);
mealRoutes.post('/:id/rating',mealController.addRating);

module.exports = mealRoutes;
