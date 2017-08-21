\c open_arms_dev

CREATE TABLE IF NOT EXISTS free_meals (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	address	VARCHAR(255),
	zipcode INT,
	website VARCHAR(255),
	phone VARCHAR(255),
	seniors_only BOOLEAN,
	breakfast VARCHAR(255),
	lunch VARCHAR(255),
	dinner VARCHAR(255),
	neighborhood VARCHAR(255),
	description TEXT
);