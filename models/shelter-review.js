const db = require('../db/config');
const shelterReview = {};

shelterReview.create = (shelter_id,rating) => {
	return db.none(`
		INSERT INTO shelter_ratings (location_id,rating)
		VALUES ($1,$2)
	`,[shelter_id,rating]);
}

shelterReview.getAvgRating = (shelter_id) => {
	return db.query(`
		SELECT AVG (rating) from shelter_ratings
		WHERE location_id = $1
		GROUP BY shelter_id
		ORDER BY shelter_id
	`,[shelter_id])
}

module.exports = shelterReview;