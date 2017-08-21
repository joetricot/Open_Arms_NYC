const express = require('express');
const jobRoutes = express.Router();

const apiHelper = require('../services/api-helpers');

jobRoutes.get('/', apiHelper.getCareerPrograms, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

module.exports = jobRoutes;

