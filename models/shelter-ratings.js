const db = require('../db/config');
const shelterRatings = {};

shelterRatings.getDropInRating = id => {
	return db.query(`
		SELECT AVG(rating) FROM dropin_ratings
		WHERE location_id = $1
		GROUP BY location_id
		ORDER BY location_id
	`,[id]);
}

shelterRatings.addDropInRating = (id,rating) => {
	return db.none(`
		INSERT INTO dropin_ratings (location_id,rating)
		VALUES ($1,$2)
	`,[id,rating]);
}

shelterRatings.getHomebaseRating = id => {
	return db.query(`
		SELECT AVG(rating) FROM homebase_ratings
		WHERE location_id = $1
		GROUP BY location_id
		ORDER BY location_id
	`,[id]);
}

shelterRatings.addHomebaseRating = (id,rating) => {
	return db.none(`
		INSERT INTO homebase_ratings (location_id,rating)
		VALUES ($1,$2)
	`,[id,rating]);
}

module.exports = shelterRatings;