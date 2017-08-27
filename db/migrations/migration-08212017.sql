CREATE TABLE free_meals (
    Id INT,
    Name VARCHAR(255),
    Address VARCHAR(255),
    Zip_Code VARCHAR(255),
    Website VARCHAR(255),
    Phone_Number VARCHAR(255),
    Senior_Citizens_Only_60 VARCHAR(255),
    Breakfast VARCHAR(255),
    Lunch VARCHAR(255),
    Dinner VARCHAR(255),
    Neighborhood VARCHAR(255),
    Description VARCHAR(5000)
);

CREATE TABLE IF NOT EXISTS dropin_ratings (
    location_id INT,
    rating INT
);

CREATE TABLE IF NOT EXISTS homebase_ratings (
    location_id INT,
    rating INT
);

CREATE TABLE IF NOT EXISTS meal_ratings (
    location_id INT,
    rating INT
);
