const express = require('express');
const homebaseRoutes = express.Router();

const apiHelper = require('../services/api-helpers');

homebaseRoutes.get('/', apiHelper.getHomebases, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

homebaseRoutes.get('/:id', apiHelper.getHomebases, (req,res) => {
	let homebase = res.locals.data[req.params.id];
	res.json({
		message: 'ok',
		data: {
			id: req.params.id,
			address: homebase.address,
			//zipcode: homebase.postcode,
			neighborhood: homebase.neighborhood,
			lat: homebase.latitude,
			lng: homebase.longitude,
			phone: homebase.phone_number,
			office: homebase.homebase_office,
			ratingSum: 0,
			numRatings: 0,
			avgRating: 0, 
		}
	});
});

homebaseRoutes.put('/:id', (req,res) => {
	console.log("UPDATE RATING")
	console.log(req.body.rating);
	res.json({
		message: 'ok',
		/*data: {
			id: req.params.id,
			address: req.body.address,
			neighborhood: req.body.neighborhood,
			lat: req.body.lat,
			lng: req.body.lng,
			phone: req.body.phone_number,
			office: req.body.homebase_office,
			ratingSum: req.body.ratingSum,
			numRatings: req.body.numRatings,
			avgRating: req.body.ratingSum/req.body.numRatings,
		}, */
		ratingSum: req.body.ratingSum,
		numRatings: req.body.numRatings,
		avgRating: req.body.avgRating, 
	});
})

module.exports = homebaseRoutes;

