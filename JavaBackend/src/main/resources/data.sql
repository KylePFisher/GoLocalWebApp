DROP TABLE IF EXISTS businesses;

CREATE TABLE businesses (
                            id INT AUTO_INCREMENT  PRIMARY KEY,
                            name VARCHAR(250) NOT NULL,
                            placeID VARCHAR(250) NOT NULL,
                            latlong VARCHAR(250) NOT NULL,
                            category VARCHAR(250) NOT NULL
);

INSERT INTO businesses (name, placeID, latlong, category)
VALUES
('Absolutely Fresh Seafood Market', 'ChIJZyoN636Ok4cRg6_q71BtNcc', '41.247300,-96.099200', 'Food & Beverage,Restaurant, Seafood'),
('Bailey''s Breakfast & Lunch', 'ChIJ44QSJ_vyk4cRtYaPX9h15bI', '41.247270,-96.100100', 'Restaurant, American, Breakfast'),
('Shucks Fish House & Oyster Bar', 'ChIJ2_Dg1uTyk4cRyijaB0rDxMM', '41.247298,-96.09874','Food & Beverage,Restaurant,Seafood'),
('Ika Ramen','ChIJU30iGnaSk4cRCZee_LiCZxQ','41.2848237,-96.0075363','Food & Beverage,Restaurant,Japanese,Ramen'),
('eCreamery Ice Cream & Gelato','ChIJawgDmt2Nk4cRC5gvEekxZp8','41.264982,-95.990447','Food & Beverage,,Ice Cream'),
('Mama''s Pizza','ChIJ9dY_KAuOk4cRMn_PP__HxBQ','41.2480257,-96.1581638,-96.1581638','Food & Beverage,Restaurant,Pizza'),
('Bar 415','ChIJVW_fAa-Pk4cRTn5xp4cNvhE','41.2559182,-95.9329309','Bar,nightclub'),
('Nebraska Brewing Company Tap Room & Brewery','ChIJ17-5Ebv0k4cRs5wX9W22lQY','41.1875114440918,-96.08132934570312','Bar,American,Brewery'),
('Goldeez Food Fun & Spirits','ChIJH4pDqjHtk4cRcTxu7W0WHEk','41.3084544,-96.075343','Bar,Sports'),
('Infusion Brewing Company','ChIJXZqpiXWSk4cRc501rxaFrkI','41.284907,-96.007724','Bar,Brewery'),
('Yoshitomo','ChIJUUAUp4qNk4cRXMzrGfTIZbw','41.2848904,-96.0050927','Food & Beverage,Restaurant,Japanese,Sushi'),
('Ted & Wally''s Ultra-Premium Ice Cream','ChIJUUAUp4qNk4cRXMzrGfTIZbw','41.254491,-95.9309463','Food & Beverage,Ice Cream'),
('Ted & Wally''s Ultra-Premium Ice Cream','ChIJzdnxQK-Pk4cRoWRCMGIO4bU','41.2848911,-96.0053774','Food & Beverage,Ice Cream'),
('The Green Spot','ChIJV0eBSqqNk4cRqUfRIhEtVyU','41.230657,-96.022624','Retail,Pet Supply'),
('Bel Air Fashions','ChIJOVT-c5byk4cReQBRXBOomcg','41.2660484,-96.0908594','Retail,Clothing'),
('Maharaja Indian Cuisine','ChIJXd37xJXyk4cRSZIb66S6ygo','41.2649868,-96.0898885','Food & Beverage,Restaurant,Indian'),
('Feta''s Greek Restaurant','ChIJYV65cZbyk4cR56UMLUwPu7Y','41.2656991,-96.0895551','Food & Beverage,Restaurant,Greek'),
('Bliss Boutique','ChIJi2Yx9APzk4cRSqTFkac080E','41.2325372,-96.0849749','Retail,Clothes'),


('All About Me Boutique','ChIJ4Z8qiaWPk4cRYW1seXIBOys','41.2558453,-95.9303287','Retail,Clothing, Boutique'),
('Apricot Lane','ChIJYfHId9Hyk4cR2hE4J5mLULU','41.25810623168945,-96.07148742675781','Retail,Clothing, Boutique'),
('Beyourself Boutique','ChIJKVU2gxKNk4cRW6E7KcD-_MQ','41.2619799,-96.0358687','Retail,Clothing,Boutique'),
('Curbside Clothing','ChIJNV-EYa-Pk4cR3HZ1ydqW2mk','41.2324975,-96.1633204','Retail,Clothing'),
('Flying Worm Vintage','ChIJTeZGRq-Pk4cRyCtAUNZZnxI','41.2543272,-95.9309884','Retail,Clothing'),
('Four Sisters Boutique','ChIJ_RjynSTzk4cRjg91cfXXMwA','41.2319541,-96.084459','Retail,Clothing,Boutique'),
('Garment District','ChIJ0euJ0Qvxk4cRDuyc5J0AoyI','41.23308181762695,-96.18054962158203','Retail,Clothing'),
('The Bike Rack','ChIJw2tLJvDtk4cR-JrfiQMl30w','41.2879327,-96.1407981','Retail,Bicycle Shop'),
('The Bike Way Omaha','ChIJOb7xh9bzk4cRoYMteRpoPho','41.23193359375,-96.15113067626953','Retail,Bicycle Shop'),
('Bike Masters','ChIJ-YABjKbtk4cRmy6OFRzqXzA','41.2896007,-96.2436198','Retail,Bicycle Shop'),
('Olympia Cycle','ChIJh7VD2pHzk4cRepD-TlhFUdg','41.2092056,-96.1243554','Retail,Bicycle Shop'),
('Olympia Cycle','ChIJSbGooVyPk4cRF7MWFOiNVKw','41.2719924,-95.9731569','Retail,Bicycle Shop'),
('Re-CYCLE Bike Shop','ChIJF7zoVgSPk4cR9zIuslnBtwM','41.2412686,-95.984488','Retail,Bicycle Shop'),
('Endless Trail Bike Shop','ChIJPSlT4fiPk4cR84o-M9JUDXU','41.24659,-95.9557151','Retail,Bicycle Shop'),
('13th Street Coffee and Tea','ChIJjz7kIK-Pk4cRMVpRo9p52NA','41.2547102,-95.9330087','Food & Beverage,Coffee Shop'),
('A Hill of Beans Coffee Roasters','ChIJQwLT6s3zk4cRlR5GRnly8lo','41.2357699,-96.1410371','Food & Beverage,Coffee Shop'),
('Accelerando Coffee House','ChIJwTur5Dvzk4cRxI6ExcyQZC8','41.263205,-96.020635','Food & Beverage,Coffee Shop'),
('Amateur Coffee','ChIJsfHkoRKOk4cRHjVZNBKDr14','41.2681589,-95.9717501','Food & Beverage,Coffee Shop'),
('Archetype Coffee','ChIJwYo8InCOk4cRtAwd9-aVZoo','41.2579171,-95.9730711','Food & Beverage,Coffee Shop'),
('Dundee Double Shot Coffee','ChIJx_xVj9uNk4cRMekU9tCUNQE','41.2603273,-95.9905353','Food & Beverage,Coffee Shop'),
('Himalayan Java','ChIJg5KCla2Pk4cRJznV-8yIrUY','41.2572479,-95.9370863','Food & Beverage,Coffee Shop');