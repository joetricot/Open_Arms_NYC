const db = require('../db/config');
const shelterReview = {};

shelterReview.create = (shelter_id,rating) => {
	return db.none(`
		INSERT INTO shelter_ratings (location_id,rating)
		VALUES ($1,$2)
	`,[shelter_id,rating]);
}

module.exports = shelterReview;