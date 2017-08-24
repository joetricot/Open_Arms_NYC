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

Meal.getRating = id => {
	return db.query(`
		SELECT AVG(rating) FROM meal_ratings
		WHERE location_id = $1
		GROUP BY location_id
		ORDER BY location_id
	`,[id]);
}

Meal.addRating = (id,rating) => {
	return db.none(`
		INSERT INTO meal_ratings (location_id,rating)
		VALUES ($1,$2)
	`,[id,rating]);
}

module.exports = Meal;