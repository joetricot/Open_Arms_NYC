const express = require('express');
const dropinRoutes = express.Router();

const dropinHelper = require('../services/dropin-helper');

dropinRoutes.get('/',dropinHelper.getDropInCenters, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data,
	})
})

module.exports = dropinRoutes;

