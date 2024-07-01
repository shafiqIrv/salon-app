CREATE TABLE `reviews` (
	`name` text NOT NULL,
	`rating` integer NOT NULL,
	`comment` text NOT NULL,
	PRIMARY KEY(`comment`, `name`, `rating`)
);
