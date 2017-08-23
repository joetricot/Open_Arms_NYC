const shelterRatings = require('../models/shelter-ratings');

const shelterController = {};

shelterController.getDropInRating = (req,res) => {
	shelterRatings.getDropInRating(req.params.id)
	.then(rating => {
		console.log(rating[0].avg);
		res.json({
			message: 'ok',
			data: rating[0].avg,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.addDropInRating = (req,res) => {
	shelterRatings.addDropInRating(req.params.id,req.body.rating)
	.then(() => {
		res.json({
			message: 'added rating successfully'
		})
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.getHomebaseRating = (req,res) => {
	console.log('******** get homebase rating')
	shelterRatings.getHomebaseRating(req.params.id)
	.then(rating => {
		console.log(rating[0].avg);
		res.json({
			message: 'ok',
			data: rating[0].avg,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

shelterController.addHomebaseRating = (req,res) => {
	shelterRatings.addHomebaseRating(req.params.id,req.body.rating)
	.then(() => {
		res.json({
			message: 'added rating successfully'
		})
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}


module.exports = shelterController;