const express = require('express');
const dropinRoutes = express.Router();

const apiHelper = require('../services/api-helpers');

dropinRoutes.get('/', apiHelper.getDropInCenters, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

module.exports = dropinRoutes;

