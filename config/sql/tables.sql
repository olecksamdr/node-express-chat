CREATE TABLE IF NOT EXISTS `users`
(
	`user_id` INTEGER NOT NULL AUTO_INCREMENT, -- max unsigned int = 4294967295
	`first_name` VARCHAR(80) NOT NULL,
	`last_name`VARCHAR(80) NOT NULL,
	`email` VARCHAR(120) NOT NULL,
	PRIMARY KEY(`user_id`)
);

CREATE TABLE IF NOT EXISTS `auth_provider` (
  `provider_id` INTEGER NOT NULL AUTO_INCREMENT,
	`hash` varchar(128) NOT NULL, -- in local auth it will be password
	`user_id` INTEGER UNSIGNED NOT NULL,
	`provider_type` enum('facebook','google', 'local', 'vk') NOT NULL,
	PRIMARY KEY  (`provider_id`)
);


-- CREATE TABLE IF NOT EXISTS `login_facebook`
-- (
-- 	`facebook_id` VARCHAR(255),
-- 	`user_id` INTEGER UNSIGNED,
-- 	PRIMARY KEY(`facebook_id`),
-- 	FOREIGN KEY(`user_id`) REFERENCES users(`user_id`)
-- 	ON DELETE CASCADE
-- );
--
-- CREATE TABLE IF NOT EXISTS `login_google`
-- (
-- 	`google_id` VARCHAR(255),
-- 	`user_id` INTEGER UNSIGNED,
-- 	PRIMARY KEY(`google_id`),
-- 	FOREIGN KEY(`user_id`) REFERENCES users(`user_id`)
-- 	ON DELETE CASCADE
-- );
--
-- CREATE TABLE IF NOT EXISTS `login_vk`
-- (
-- 	`vk_id` VARCHAR(255),
-- 	`user_id` INTEGER UNSIGNED,
-- 	PRIMARY KEY(`vk_id`),
-- 	FOREIGN KEY(`user_id`) REFERENCES users(`user_id`)
-- 	ON DELETE CASCADE
-- );
--
-- CREATE TABLE IF NOT EXISTS `login_local`
-- (
-- 	`password` VARCHAR(150),
-- 	`salt` INTEGER UNSIGNED,
-- 	`user_id` INTEGER UNSIGNED,
-- 	PRIMARY KEY(`password`),
-- 	FOREIGN KEY(`user_id`) REFERENCES users(`user_id`)
-- 	ON DELETE CASCADE
-- );
