const Shelter = require('../models/shelter');
const shelterReview = require('../models/shelter-review');

const shelterController = {};

shelterController.index = (req,res) => {
	Shelter.findAll()
	.then(shelters => {
		res.json({
			message: 'ok',
			data: shelters,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.show = (req,res) => {
	Shelter.findById(req.params.id)
	.then(shelter => {
		res.json({
			message: 'ok',
			data: shelters,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}
/*
shelterController.createDropIn = (req,res) => {
	Shelter.create({
		name: req.body.name,
		category: 'dropin',
		address: req.body.address,
		hours: req.body.hours,
		neighborhood: null,
		latitude: req.body.lat,
		longitude: req.body.lng,
		phone: null,
		office: null,
	}).then(shelter => {
			res.json({
				message: 'ok',
				data: shelter,
			});  
   }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.createHomebase = (req,res) => {
	Shelter.create({
		name: req.body.name,
		category: 'homebase',
		address: req.body.address,
		hours: null,
		neighborhood: req.body.neighborhood,
		latitude: req.body.lat,
		longitude: req.body.lng,
		phone: req.body.phone,
		office: req.body.office,
	})
}*/

shelterController.create = (req,res) => {
	Shelter.create({
		name: req.body.name,
		category: req.body.category,
		address: req.body.address,
		hours: req.body.hours,
		neighborhood: req.body.neighborhood,
		latitude: req.body.lat,
		longitude: req.body.lng,
		phone: req.body.phone,
		office: req.body.office,
	}).then(shelter => {
			res.json({
				message: 'ok',
				data: shelter,
			});  
   }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}


shelterController.addRating = (req,res) => {
	shelterReview.create(req.params.id,req.body.rating)
	.then(() => {
		res.json({
			message: 'ok',
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.getRating = (req,res) => {
	shelterReview.getAvgRating(req.params.id)
	.then(rating => {
		console.log(rating);
		res.json({
			message: 'ok',
			data: rating,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}


module.exports = shelterController;