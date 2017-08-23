const express = require('express');
const homebaseRoutes = express.Router();
const shelterController = require('../controllers/shelter-controller');

const apiHelper = require('../services/api-helpers');

homebaseRoutes.get('/', apiHelper.getHomebases, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

homebaseRoutes.get('/:id', apiHelper.getHomebases, (req,res) => {
	let homebase = res.locals.data[req.params.id];
	const data = {
			id: req.params.id,
			address: homebase.address,
			hours: null,
			neighborhood: homebase.neighborhood,
			lat: homebase.latitude,
			lng: homebase.longitude,
			phone: homebase.phone_number,
			office: homebase.homebase_office,
	};
	res.json({
		message: 'ok',
		data: data
	});
});

homebaseRoutes.get('/:id/rating', shelterController.getHomebaseRating);
homebaseRoutes.post('/:id/rating', shelterController.addHomebaseRating);

module.exports = homebaseRoutes;

