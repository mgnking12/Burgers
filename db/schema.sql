### Schema

CREATE DATABASE burgs_db;
USE burgs_db;

CREATE TABLE burgs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
