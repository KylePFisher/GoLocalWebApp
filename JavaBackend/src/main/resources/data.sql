DROP TABLE IF EXISTS Businesses;

	CREATE TABLE Businesses (
	  id INT AUTO_INCREMENT  PRIMARY KEY,
	  name VARCHAR(250) NOT NULL,
	  location VARCHAR(250) NOT NULL,
	  latlong VARCHAR(250) NOT NULL,
	  category VARCHAR(250) NOT NULL,
	  description VARCHAR(250) NOT NULL
	);

	INSERT INTO Businesses (name, location, latlong, category, description) VALUES
	  ('Anthonys',
	  '7220 F St, Omaha, NE 68127-1811',
	    '41.220520,-96.024820',
	    'Restaurant,American,Steak',
	    'This company is a restaurant that has a variety of steak, prime rib, '),
	    ('Big Mamas Kitchen', '5555 Faker St.', '40.44,44.44','Restaurant,BBQ','test Descrption');
	 /* ('Johnny Sortino''s Pizza', '7880 L St Omaha, NE 68127-1836', '41.213100,-96.037380', 'Restaurant,Italian','This pizza restaurant offers dine-in or take-out pizza and pasta. They also provide a large party room, game room and several big screen televisions for watching sports.'),
      ('Rice Bowl', '505 N Saddle Creek Rd Omaha, NE 68131-1745', '41.264200,-95.980530', 'Restaurant,Chinese', 'This is a quick serve Chinese restaurant offering dine in and carry out Chinese cuisine including chicken, beef and pork dishes, soup, and egg rolls.');

	  /*('Billys Cafe', '5555 Fake St.', 'Diner'),
	  ('Big Mamas Kitchen', '5555 Faker St.', 'BBQ'),
	  ('Three Happiness', '5555 Fakest St.', 'Chinese'),
	  ('Rice Bowl', '5555 Fakestest St.', 'Chinese');*/