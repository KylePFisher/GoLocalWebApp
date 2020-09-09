DROP TABLE IF EXISTS restaurants;
	 
	CREATE TABLE restaurants (
	  id INT AUTO_INCREMENT  PRIMARY KEY,
	  name VARCHAR(250) NOT NULL,
	  location VARCHAR(250) NOT NULL,
	  category VARCHAR(250) NOT NULL
	);
	 
	INSERT INTO restaurants (name, location, category) VALUES
	  ('Billys Cafe', '5555 Fake St.', 'Diner'),
	  ('Big Mamas Kitchen', '5555 Faker St.', 'BBQ'),
	  ('Three Happiness', '5555 Fakest St.', 'Chinese'),
	  ('Rice Bowl', '5555 Fakestest St.', 'Chinese');