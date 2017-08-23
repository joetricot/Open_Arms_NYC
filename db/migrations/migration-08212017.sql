\c open_arms_dev

CREATE TABLE free_meals (
    Id INT,
    Name VARCHAR(49), 
    Address VARCHAR(67),
    Zip_Code VARCHAR(20),
    Website VARCHAR(118),
    Phone_Number VARCHAR(15),
    Senior_Citizens_Only_60 VARCHAR(5),
    Breakfast VARCHAR(31),
    Lunch VARCHAR(28),
    Dinner VARCHAR(29),
    Neighborhood VARCHAR(26),
    Description VARCHAR(1585)
);

CREATE TABLE IF NOT EXISTS shelters (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	category VARCHAR(255),
	address VARCHAR(255),
	hours VARCHAR(255),
	neighborhood VARCHAR(255),
	latitude DECIMAL(12,9),
	longitude DECIMAL(12,9),
	phone VARCHAR(255),
	office VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS shelter_ratings (
	location_id INT REFERENCES shelters(id),
	rating INT
);

CREATE TABLE IF NOT EXISTS dropin_ratings (
	location_id INT,
	rating INT
);

CREATE TABLE IF NOT EXISTS homebase_ratings (
	location_id INT,
	rating INT
);