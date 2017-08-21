const express = require('express');
const jobRoutes = express.Router();

const apiHelper = require('../services/api-helpers');

jobRoutes.get('/', apiHelper.getCareerPrograms, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	});
});

jobRoutes.get('/:id', apiHelper.getCareerPrograms, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data[req.params.id],
	})
})

module.exports = jobRoutes;

