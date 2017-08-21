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
	res.json({
		message: 'ok',
		data: res.locals.data[req.params.id],
	})
})

module.exports = homebaseRoutes;

