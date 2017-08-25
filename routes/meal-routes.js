require('isomorphic-fetch');
const express = require('express');
const mealRoutes = express.Router();
const mealController = require('../controllers/meal-controller');
const API_KEY = process.env.API_KEY;

mealRoutes.get('/',mealController.index);

mealRoutes.get('/:id',mealController.show,(req,res) => {
	const meal = res.locals.data;
	const address = meal.address;
	const parsedAddress = address.split(' ').join('+') + "+Manhattan+NY";
	fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}&key=${API_KEY}`)
	.then(res => res.json())
	.then(jsonRes => {
		let coords = jsonRes.results[0].geometry.location;
		let data = meal;
		data.lat = coords.lat;
		data.lng = coords.lng;
		res.json({
			data: data,
		});
	}).catch(err => res.json({error: err}));
});

mealRoutes.get('/:id/rating',mealController.getRating);
mealRoutes.post('/:id/rating',mealController.addRating);

module.exports = mealRoutes;
