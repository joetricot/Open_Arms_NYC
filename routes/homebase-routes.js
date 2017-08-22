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
			address: homebase.address,
			zipcode: homebase.postcode,
			neighborhood: homebase.neighborhood,
			lat: homebase.latitude,
			lng: homebase.longitude,
			phone: homebase.phone_number,
			office: homebase.homebase_office,
		}
		

	})
})

module.exports = homebaseRoutes;

