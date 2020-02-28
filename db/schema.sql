-- DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(90) NOT NULL,
	devoured boolean default false,
	PRIMARY KEY (id)
);

-- USE burger_db;

-- insert into burgers (burger_name)
--     values  ("The Royale with Cheese"),
--             ("Double Cheese Bacon Burger"),
--             ("Cluckin' Hot Reaper Chicken Burger");

-- SELECT * FROM burgers;