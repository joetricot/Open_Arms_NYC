const db = require('../db/config');
const Meal = {};

Meal.findAll = () => {
	return db.query('SELECT * FROM free_meals');
};

Meal.findById = id => {
	return db.oneOrNone(`
		SELECT * FROM free_meals
		WHERE id = $1
	`,[id])
}

module.exports = Meal;