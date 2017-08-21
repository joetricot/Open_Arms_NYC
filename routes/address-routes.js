const express = require('express');
const addressRoutes = express.Router();

const addressHelper = require('../services/geocode-helper');

addressRoutes.get('/:address', addressHelper.convertToCoords, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

module.exports = addressRoutes;