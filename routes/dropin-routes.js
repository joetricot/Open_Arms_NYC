require('isomorphic-fetch');
const express = require('express');
const dropinRoutes = express.Router();
const apiHelper = require('../services/api-helpers');
const API_KEY = process.env.API_KEY;
const shelterController = require('../controllers/shelter-controller');


dropinRoutes.get('/', apiHelper.getDropInCenters, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
});

dropinRoutes.get('/:id', apiHelper.getDropInCenters, (req,res) => {
	const dropin = res.locals.data[req.params.id];
	const address =  dropin.location_1_address;
	//formatted for geocoder API call
	let parsedAddress = address.split(' ').join('+');
	//get geocoder data from address
	fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${parsedAddress}&key=${API_KEY}`)
	.then(res => res.json())
	.then(jsonRes => {
		let coords = jsonRes.results[0].geometry.location;
		res.json({
				message: 'ok',
				data: {
					id: req.params.id,
					name: dropin.center_name,
					hours: dropin.comments,
					address: address,
					lat: coords.lat,
					lng: coords.lng,
				},
		});
	}).catch(err => console.log(err));
});

dropinRoutes.get('/:id/rating', shelterController.getDropInRating);
dropinRoutes.post('/:id/rating', shelterController.addDropInRating);

module.exports = dropinRoutes;

