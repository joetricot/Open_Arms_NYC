const db = require('../db/config');
const Shelter = {};

Shelter.findAll = () => {
	return db.query('SELECT * FROM shelters');
}

Shelter.findById = id => {
	return db.oneOrNone(`
		SELECT * FROM shelters
		WHERE id = $1
	`,[id])
}

Shelter.create = shelter => {
	return db.one(`
		INSERT INTO shelters
		(name,category,address,hours,neighborhood,
			latitude,longitude,phone,office)
		VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
		RETURNING *
	`,[shelter.name, shelter.category, shelter.address, shelter.hours,
		shelter.neighborhood,shelter.latitude,shelter.longitude,shelter.phone,
		shelter.office]);
}

module.exports = Shelter;