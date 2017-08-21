const express = require('express');
const dropinRoutes = express.Router();

const apiHelper = require('../services/api-helpers');

dropinRoutes.get('/', apiHelper.getDropInCenters, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

dropinRoutes.get('/:id', apiHelper.getDropInCenters, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data[req.params.id],
	})
})

module.exports = dropinRoutes;

