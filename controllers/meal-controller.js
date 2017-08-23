const Meal = require('../models/meal');
const mealController = {};

mealController.index = (req,res) => {
	Meal.findAll()
	.then(meals => {
		res.json({
			message: 'ok',
			data: meals,
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

mealController.show = (req,res,next) => {
	Meal.findById(req.params.id)
	.then(meal => {
		res.locals.data = meal;
		next();
		/*res.json({
			message: 'ok',
			data: meal,
		});*/
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

mealController.getRating = (req,res) => {
	Meal.getRating(req.params.id)
	.then(rating => {
		res.json({
			message: 'ok',
			data: rating[0].avg,
		}); 
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

mealController.addRating = (req,res) => {
	Meal.addRating(req.params.id, req.body.rating)
	.then(() => {
		res.json({
			message: 'ok',
		});
	}).catch(err => {
      console.log(err);
      res.status(500).json({ err });
	});
}

module.exports = mealController;
