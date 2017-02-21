CREATE TABLE `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` DATETIME NOT NULL,
  `date_updated` DATETIME NOT NULL,
  `media_url` varchar(200) DEFAULT NULL,
  `thumbnail_url` varchar(200) DEFAULT NULL,
  `text` varchar(200) DEFAULT NULL,
  `keyword` varchar(200) DEFAULT NULL,
  `norm_description` varchar(200) DEFAULT NULL,
  `source_url` varchar(200) DEFAULT NULL,
  `source_user` varchar(200) DEFAULT NULL,
  `source_id` varchar(200) DEFAULT NULL,
  `crawled_retails_shops` boolean DEFAULT NULL,
  `crawled_shops_links` boolean DEFAULT NULL,
  `shop_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


insert into media values 
(null, 
now(), 
now(), 
'https://project-allendecodemtl.c9users.io/001.png', 
'https://project-allendecodemtl.c9users.io/001.png',
'text','vans sneakers',
'normalised',
'source_url', 
'source_user', 
'source_id', false, false, 'shop_url');

insert into media values 
(null, 
now(), 
now(), 
'https://project-allendecodemtl.c9users.io/002.png', 
'https://project-allendecodemtl.c9users.io/002.png',
'text','adidas sneakers men',
'normalised',
'source_url', 
'source_user', 
'source_id', false, false,'shop_url');

insert into media values 
(null, 
now(), 
now(), 
'https://project-allendecodemtl.c9users.io/003.png', 
'https://project-allendecodemtl.c9users.io/003.png',
'text','nike sneakers men',
'normalised',
'source_url', 
'source_user', 
'source_id', false, false,'shop_url');



CREATE TABLE `profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` DATETIME NOT NULL,
  `date_updated` DATETIME NOT NULL,
  `first_name` varchar(200) DEFAULT NULL,
  `last_name` varchar(200) DEFAULT NULL,
  `gender` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

insert into profile values (null, now(), now(), 'Alice', 'Smith', 'Female', 'alice@smith.com', null);
insert into profile values (null, now(), now(), 'Bob', 'Taylor', 'Male', 'bob@taylor.com', null);

CREATE TABLE `shop_links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` DATETIME NOT NULL,
  `date_updated` DATETIME NOT NULL,
  `price` decimal(12,2) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `media_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);



CREATE TABLE `retail_shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_created` DATETIME NOT NULL,
  `date_updated` DATETIME NOT NULL,
  `supplier_name` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `postcode` varchar(200) DEFAULT NULL,
  `tel` varchar(200) DEFAULT NULL,
  `geo_loc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
