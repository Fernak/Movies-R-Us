-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cpsc471_project_db
-- ------------------------------------------------------
-- Server version	8.0.23

DROP DATABASE IF EXISTS `cpsc471_project_db`;
CREATE DATABASE `cpsc471_project_db`; 
USE `cpsc471_project_db`;


--
-- Table structure for table `account`
--
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `Email` varchar(50) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Email`),
  CONSTRAINT `account_chk_1` CHECK ((length(`Password`) > 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `account`
--
INSERT INTO `account` VALUES ('anisha.williams@email.com','anisha.williams','abc123'),('dennis.scott@email.com','dennis.scott','qwerty'),('email@email.com','email','123456'),('jonathan.smith@email.com','jonathan.smith','p@ssword'),('joshua.diwa1@ucalgary.ca','joshua.diwa','471project'),('michael.miller@email.com','michael.mille','123123'),('nolan.deutsch@ucalgary.ca','nolan.deutsch','cpsc471'),('randomr@email.com','randomr','123456'),('sam.santiago@email.com','sam.santiago','Million2'),('tiffany.tang1@ucalgary.ca','tiffany.tang','database');

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Email` varchar(50) NOT NULL,
  `Admin_role` varchar(3) NOT NULL DEFAULT 'yes',
  `Profile_pic` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--
INSERT INTO `admin` VALUES ('nolan.deutsch@ucalgary.ca','yes','https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png'),('joshua.diwa1@ucalgary.ca','yes','https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png'),('tiffany.tang1@ucalgary.ca','yes','https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png');

--
-- Table structure for table `crew`
--
DROP TABLE IF EXISTS `crew`;
CREATE TABLE `crew` (
  `Cid` varchar(36) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Image` varchar(300) NOT NULL,
  `Hometown` varchar(45) NOT NULL,
  PRIMARY KEY (`Cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `crew`
--
INSERT INTO `crew` VALUES ('595b30e2-93a0-11eb-a502-00ff9885c460','Orlando Bloom','Male','https://m.media-amazon.com/images/M/MV5BMjE1MDkxMjQ3NV5BMl5BanBnXkFtZTcwMzQ3Mjc4MQ@@._V1_UY317_CR8,0,214,317_AL_.jpg','Canterbury, Kent'),('595d7ec6-93a0-11eb-a502-00ff9885c460','Viggo Mortensen','Male','https://m.media-amazon.com/images/M/MV5BNDQzOTg4NzA2Nl5BMl5BanBnXkFtZTcwMzkwNjkxMg@@._V1_UX214_CR0,0,214,317_AL_.jpg','New York City'),('6e31c1e0-93a0-11eb-a502-00ff9885c460','Robert Downey Jr','Male','https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg','Manhattan, New York City'),('6e338d37-93a0-11eb-a502-00ff9885c460','Chris Evans','Male','https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY317_CR6,0,214,317_AL_.jpg','Boston, Massachusetts'),('6e358622-93a0-11eb-a502-00ff9885c460','Jennifer Aniston','Female','https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg','Sherman Oaks, California'),('6e38250f-93a0-11eb-a502-00ff9885c460','Leighton Meester','Female','https://m.media-amazon.com/images/M/MV5BYmQzM2E1ZWUtZDBjOC00MDk3LWE4YjItZWVjMTk3MzAwYTBjXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_UY317_CR3,0,214,317_AL_.jpg','Fort Worth'),('d068adc4-939f-11eb-a502-00ff9885c460','Ian McKellen','Male','https://m.media-amazon.com/images/M/MV5BMTQ2MjgyNjk3MV5BMl5BanBnXkFtZTcwNTA3NTY5Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg','Burnley, Lancashire'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','Elijah Wood','Male','https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg','Cedar Rapids, Iowa');

--
-- Table structure for table `favourites`
--
DROP TABLE IF EXISTS `favourites`;
CREATE TABLE `favourites` (
  `Email` varchar(50) NOT NULL,
  `Uid` varchar(36) DEFAULT NULL,
  `Cid` varchar(36) DEFAULT NULL,
  `Name` varchar(70) NOT NULL,
  PRIMARY KEY (`Email`,`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `favourites`
--
INSERT INTO `favourites` VALUES ('anisha.williams@email.com',NULL,'6e338d37-93a0-11eb-a502-00ff9885c460','Chris Evans'),('anisha.williams@email.com','1f3cd877-93ca-11eb-a502-00ff9885c460',NULL,'Friends'),('anisha.williams@email.com','1f3cd961-93ca-11eb-a502-00ff9885c460',NULL,'Gossip Girl'),('dennis.scott@email.com',NULL,'6e338d37-93a0-11eb-a502-00ff9885c460','Chris Evans'),('dennis.scott@email.com',NULL,'d068adc4-939f-11eb-a502-00ff9885c460','Ian McKellen'),('dennis.scott@email.com',NULL,'6e31c1e0-93a0-11eb-a502-00ff9885c460','Robert Downey Jr'),('dennis.scott@email.com','1f3cdad1-93ca-11eb-a502-00ff9885c460',NULL,'SpongeBob SquarePants'),('dennis.scott@email.com','1f3cd13c-93ca-11eb-a502-00ff9885c460',NULL,'The Hobbit: The Desolation of Smaug'),('jonathan.smith@email.com','1f3cd5cd-93ca-11eb-a502-00ff9885c460',NULL,'Adventure Time'),('jonathan.smith@email.com','1f3cda28-93ca-11eb-a502-00ff9885c460',NULL,'Phineas and Ferb'),('jonathan.smith@email.com','1f3cdad1-93ca-11eb-a502-00ff9885c460',NULL,'SpongeBob SquarePants'),('michael.miller@email.com','1f3cd13c-93ca-11eb-a502-00ff9885c460',NULL,'The Hobbit: The Desolation of Smaug'),('michael.miller@email.com','1f3ccf51-93ca-11eb-a502-00ff9885c460',NULL,'The Lord of the Rings: The Return of the King'),('michael.miller@email.com','1f3ccc8a-93ca-11eb-a502-00ff9885c460',NULL,'The Lord of the Rings: The Two Towers');

DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `favourites_BEFORE_INSERT` BEFORE INSERT ON `favourites` FOR EACH ROW BEGIN
	IF (NEW.Cid = '') THEN 
		SET NEW.Name = (SELECT p.Name FROM program AS p WHERE p.Uid=NEW.Uid);
        SET NEW.Cid = null; 
    ELSEIF (NEW.Uid = '') THEN
		SET NEW.Name = (SELECT c.Name FROM crew AS c WHERE c.Cid=NEW.Cid);
        SET NEW.Uid = null; 
	END IF; 
END */;;
DELIMITER ;

--
-- Table structure for table `language`
--
DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `Email` varchar(50) NOT NULL,
  `Language_used` varchar(25) NOT NULL,
  PRIMARY KEY (`Email`,`Language_used`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `language`
--
INSERT INTO `language` VALUES ('anisha.williams@email.com','English'),('anisha.williams@email.com','French'),('dennis.scott@email.com','English'),('email@email.com','English'),('jonathan.smith@email.com','English'),('jonathan.smith@email.com','German'),('michael.miller@email.com','English'),('michael.miller@email.com','Spanish'),('randomr@email.com','English'),('sam.santiago@email.com','English');

--
-- Table structure for table `list_of_services`
--
DROP TABLE IF EXISTS `list_of_services`;
CREATE TABLE `list_of_services` (
  `Sid` varchar(36) NOT NULL,
  `Service_name` varchar(50) NOT NULL,
  PRIMARY KEY (`Sid`,`Service_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `list_of_services`
--
INSERT INTO `list_of_services` VALUES ('aac58fbd-93a2-11eb-a502-00ff9885c460','Netflix'),('aac5b4a1-93a2-11eb-a502-00ff9885c460','Amazon Prime Video'),('aac5b687-93a2-11eb-a502-00ff9885c460','Disney+'),('aac5b731-93a2-11eb-a502-00ff9885c460','Apple TV+'),('aac5b7ad-93a2-11eb-a502-00ff9885c460','Cineplex'),('aac5ba07-93a2-11eb-a502-00ff9885c460','Google Play'),('dd114ab6-93d9-11eb-a502-00ff9885c460','YouTube');

--
-- Table structure for table `list_of_user_services`
--
DROP TABLE IF EXISTS `list_of_user_services`;
CREATE TABLE `list_of_user_services` (
  `Email` varchar(50) NOT NULL,
  `Service_name` varchar(50) NOT NULL,
  PRIMARY KEY (`Email`,`Service_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `list_of_user_services`
--
INSERT INTO `list_of_user_services` VALUES ('anisha.williams@email.com','Apple TV+'),('anisha.williams@email.com','YouTube'),('dennis.scott@email.com','Amazon Prime Video'),('dennis.scott@email.com','Disney+'),('email@email.com','Apple TV+'),('jonathan.smith@email.com','Apple TV+'),('jonathan.smith@email.com','Disney+'),('jonathan.smith@email.com','Google Play'),('michael.miller@email.com','Amazon Prime Video'),('michael.miller@email.com','Apple TV+'),('michael.miller@email.com','Disney+'),('michael.miller@email.com','Google Play'),('randomr@email.com','Netflix'),('sam.santiago@email.com','YouTube');

--
-- Table structure for table `list_of_users`
--

DROP TABLE IF EXISTS `list_of_users`;
CREATE TABLE `list_of_users` (
  `Email` varchar(50) NOT NULL,
  `User_id` varchar(36) NOT NULL,
  PRIMARY KEY (`Email`,`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `list_of_users`
--
INSERT INTO `list_of_users` VALUES ('anisha.williams@email.com','fde44e4a-93a2-11eb-a502-00ff9885c460'),('dennis.scott@email.com','fde44f2b-93a2-11eb-a502-00ff9885c460'),('email@email.com','fde44d42-93a2-11eb-a502-00ff9885c460'),('jonathan.smith@email.com','fde4514a-93a2-11eb-a502-00ff9885c460'),('michael.miller@email.com','fde44eea-93a2-11eb-a502-00ff9885c460'),('randomr@email.com','fde43aac-93a2-11eb-a502-00ff9885c460'),('sam.santiago@email.com','fde44e9f-93a2-11eb-a502-00ff9885c460');

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
CREATE TABLE `program` (
  `Uid` varchar(36) NOT NULL,
  `Name` varchar(70) NOT NULL,
  `Type` varchar(7) NOT NULL,
  `Image` varchar(300) NOT NULL,
  `Service_name` varchar(50) NOT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `program`
--
INSERT INTO `program` VALUES ('1f3caffd-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Fellowship of the Ring','Movie','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo','Apple TV+'),('1f3ccc8a-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Two Towers','Movie','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6nJbgIc4VDmwLzaMo8CLOYiPkpgd5Bdm8EpL9hna4XZggrlit','Google Play'),('1f3ccf51-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Return of the King','Movie','https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg','Apple TV+'),('1f3cd13c-93ca-11eb-a502-00ff9885c460','The Hobbit: The Desolation of Smaug','Movie','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8e9aFTxDo5jCIaaDNYgNcjJ4JFIz8MVlJr3-nhggVytaoFLOu','Amazon Prime Video'),('1f3cd355-93ca-11eb-a502-00ff9885c460','Avengers: Endgame','Movie','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzYzZ8fnuDOmDN2dmhVFHoPwTZozfcjtlvsf3zdjzfgduLR0jy','Disney+'),('1f3cd5cd-93ca-11eb-a502-00ff9885c460','Adventure Time','TV Show','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDh1BrFLCYBpDe622TlZ2qzP4KCJmquflMec2AOfh_ke9kxPpB','Google Play'),('1f3cd877-93ca-11eb-a502-00ff9885c460','Friends','TV Show','https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg','Apple TV+'),('1f3cd961-93ca-11eb-a502-00ff9885c460','Gossip Girl','TV Show','https://www.blakespectrum.org/wp-content/uploads/2020/05/unnamed.png','YouTube'),('1f3cda28-93ca-11eb-a502-00ff9885c460','Phineas and Ferb','TV Show','https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg','Disney+'),('1f3cdad1-93ca-11eb-a502-00ff9885c460','SpongeBob SquarePants','TV Show','https://img.reelgood.com/content/show/2a3749d1-4ff9-4be8-a706-1048804a6e64/poster-780.jpg','Google Play');

--
-- Table structure for table `program_details`
--

DROP TABLE IF EXISTS `program_details`;
CREATE TABLE `program_details` (
  `Uid` varchar(36) NOT NULL,
  `User_rating` float(3,1) NOT NULL,
  `Age_rating` varchar(15) NOT NULL,
  `No_of_seasons` int DEFAULT NULL,
  `Year` int NOT NULL,
  `Genre` varchar(45) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Run_time` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `program_details`
--
INSERT INTO `program_details` VALUES ('1f3caffd-93ca-11eb-a502-00ff9885c460',8.8,'14A',NULL,2001,'Fantasy, Drama, Action, Adventure','A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.','2h59min'),('1f3ccc8a-93ca-11eb-a502-00ff9885c460',8.7,'PG-13',NULL,2002,'Fantasy, Adventure','Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault from his domain.','3h 43min'),('1f3ccf51-93ca-11eb-a502-00ff9885c460',8.9,'PG-13',NULL,2003,'Fantasy, Adventure','The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.','4h 11min'),('1f3cd13c-93ca-11eb-a502-00ff9885c460',7.8,'PG-13',NULL,2013,'Fantasy, Adventure','Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug.','3h 7min'),('1f3cd355-93ca-11eb-a502-00ff9885c460',8.4,'PG-13',NULL,2019,'Action, Sci-fi','After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.','3h 2min'),('1f3cd5cd-93ca-11eb-a502-00ff9885c460',8.6,'C8',10,2010,'Adventure','Living in the post-apocalyptic land of Ooo, Finn, a 14-year-old boy, and his magical dog, Jake, embark on a series of missions to prove themselves as virtuous adventurers.',NULL),('1f3cd877-93ca-11eb-a502-00ff9885c460',8.9,'G',10,1994,'Sitcom','Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.','13min'),('1f3cd961-93ca-11eb-a502-00ff9885c460',7.4,'G',6,2007,'Drama','Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.','42min'),('1f3cda28-93ca-11eb-a502-00ff9885c460',8.0,'G',4,2007,'Comedy','Phineas and Ferb embark on various adventures during their summer vacation, while trying to keep their sister from interfering with their plans.','19min'),('1f3cdad1-93ca-11eb-a502-00ff9885c460',8.2,'G',13,1999,'Comedy','A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab, lives in the Pacific Ocean. He embarks on various adventures with his friends at Bikini Bottom.','18min');

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `Uid` varchar(36) NOT NULL,
  `Author` varchar(45) NOT NULL,
  `Date` varchar(45) NOT NULL,
  `Rating` int NOT NULL,
  `Description` varchar(300) NOT NULL,
  PRIMARY KEY (`Uid`,`Author`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--
INSERT INTO `reviews` VALUES ('1f3caffd-93ca-11eb-a502-00ff9885c460','michael.mille','2019-11-05',3,'Good Movie'),('1f3ccc8a-93ca-11eb-a502-00ff9885c460','michael.mille','2019-11-06',3,'Good Movie'),('1f3ccf51-93ca-11eb-a502-00ff9885c460','michael.mille','2019-11-07',3,'Good Movie'),('1f3cd13c-93ca-11eb-a502-00ff9885c460','dennis.scott','2021-04-02',5,'Yayyyy!!! It\'s finally on!!'),('1f3cd13c-93ca-11eb-a502-00ff9885c460','michael.mille','2019-11-09',3,'Good Movie'),('1f3cd355-93ca-11eb-a502-00ff9885c460','dennis.scott','2021-04-02',5,'NOOOOO! IRON MAN!!!!!!'),('1f3cd355-93ca-11eb-a502-00ff9885c460','randomr','2021-04-06',5,'Interesting Movie!'),('1f3cd5cd-93ca-11eb-a502-00ff9885c460','jonathan.smith','2021-04-07',4,'Good Show!!'),('1f3cd877-93ca-11eb-a502-00ff9885c460','anisha.williams','2021-04-02',5,'Love this show!'),('1f3cd961-93ca-11eb-a502-00ff9885c460','anisha.williams','2021-04-02',5,'Just what I needed for quarantine!'),('1f3cd961-93ca-11eb-a502-00ff9885c460','sam.santiago','2019-09-14',2,'Interesting Show.'),('1f3cda28-93ca-11eb-a502-00ff9885c460','randomr','2020-06-14',1,'This is dumb'),('1f3cdad1-93ca-11eb-a502-00ff9885c460','dennis.scott','2021-04-02',5,'The good old times!'),('1f3cdad1-93ca-11eb-a502-00ff9885c460','jonathan.smith','2021-04-13',5,'Nice Show!');


--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Cid` varchar(36) NOT NULL,
  `Crew_role` varchar(45) NOT NULL,
  PRIMARY KEY (`Cid`,`Crew_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `role`
--
INSERT INTO `role` VALUES ('595b30e2-93a0-11eb-a502-00ff9885c460','Actor'),('595b30e2-93a0-11eb-a502-00ff9885c460','Producer'),('595d7ec6-93a0-11eb-a502-00ff9885c460','Actor'),('595d7ec6-93a0-11eb-a502-00ff9885c460','Producer'),('6e31c1e0-93a0-11eb-a502-00ff9885c460','Actor'),('6e31c1e0-93a0-11eb-a502-00ff9885c460','Producer'),('6e338d37-93a0-11eb-a502-00ff9885c460','Actor'),('6e338d37-93a0-11eb-a502-00ff9885c460','Producer'),('6e358622-93a0-11eb-a502-00ff9885c460','Actress'),('6e358622-93a0-11eb-a502-00ff9885c460','Producer'),('6e38250f-93a0-11eb-a502-00ff9885c460','Actress'),('d068adc4-939f-11eb-a502-00ff9885c460','Actor'),('d068adc4-939f-11eb-a502-00ff9885c460','Writer'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','Actor'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','Producer');


--
-- Table structure for table `streaming_schedule`
--

DROP TABLE IF EXISTS `streaming_schedule`;
CREATE TABLE `streaming_schedule` (
  `Uid` varchar(36) NOT NULL,
  `Arrival_month` varchar(9) NOT NULL,
  `Arrival_day` int NOT NULL,
  `Arrival_year` int NOT NULL,
  `Departure_month` varchar(9) DEFAULT NULL,
  `Departure_day` int DEFAULT NULL,
  `Departure_year` int DEFAULT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `streaming_schedule`
--
INSERT INTO `streaming_schedule` VALUES ('1f3caffd-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3ccc8a-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3ccf51-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cd13c-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cd355-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cd5cd-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cd877-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cd961-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cda28-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL),('1f3cdad1-93ca-11eb-a502-00ff9885c460','December',1,2018,NULL,NULL,NULL);

--
-- Table structure for table `streaming_service`
--

DROP TABLE IF EXISTS `streaming_service`;
CREATE TABLE `streaming_service` (
  `Service_name` varchar(50) NOT NULL,
  `Location` varchar(45) NOT NULL,
  `Price` float(5,2) NOT NULL,
  `Logo` varchar(300) NOT NULL,
  PRIMARY KEY (`Service_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `streaming_service`
--
INSERT INTO `streaming_service` VALUES ('Amazon Prime Video','Canada',7.99,'https://images.justwatch.com/icon/52449861/s100'),('Apple TV+','Canada',5.99,'https://images.justwatch.com/icon/152862153/s100'),('Cineplex','Canada',14.95,'https://images.justwatch.com/icon/5278783/s100'),('Disney+','Canada',11.99,'https://images.justwatch.com/icon/147638351/s100'),('Google Play','Canada',9.99,'https://images.justwatch.com/icon/169478387/s100'),('Netflix','Canada',9.99,'https://images.justwatch.com/icon/207360008/s100'),('YouTube','Canada',11.99,'https://images.justwatch.com/icon/59562423/s100');


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Email` varchar(50) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Age` int NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Profile_pic` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--
INSERT INTO `user` VALUES ('email@email.com','Email E',43,'Female',NULL),('anisha.williams@email.com','Anisha Williams',19,'Female','https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999'),('sam.santiago@email.com','Sam Santiago',32,'Male',NULL),('michael.miller@email.com','Michael Miller',22,'Male','https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),('dennis.scott@email.com','Dennis Scott',35,'Female',NULL),('jonathan.smith@email.com','Jonathan Smith',45,'Male',NULL),('randomr@email.com','Random R',20,'Male',NULL);

--
-- Table structure for table `work_on`
--

DROP TABLE IF EXISTS `work_on`;
CREATE TABLE `work_on` (
  `Cid` varchar(36) NOT NULL,
  `Uid` varchar(36) NOT NULL,
  `Program_name` varchar(50) NOT NULL,
  PRIMARY KEY (`Cid`,`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `work_on`
--
INSERT INTO `work_on` VALUES ('595b30e2-93a0-11eb-a502-00ff9885c460','1f3caffd-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Fellowship of the Ring'),('595b30e2-93a0-11eb-a502-00ff9885c460','1f3ccc8a-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Two Towers'),('595b30e2-93a0-11eb-a502-00ff9885c460','1f3ccf51-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Return of the King'),('595b30e2-93a0-11eb-a502-00ff9885c460','1f3cd13c-93ca-11eb-a502-00ff9885c460','The Hobbit: The Desolation of Smaug'),('595d7ec6-93a0-11eb-a502-00ff9885c460','1f3caffd-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Fellowship of the Ring'),('595d7ec6-93a0-11eb-a502-00ff9885c460','1f3ccc8a-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Two Towers'),('595d7ec6-93a0-11eb-a502-00ff9885c460','1f3ccf51-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Return of the King'),('6e31c1e0-93a0-11eb-a502-00ff9885c460','1f3cd355-93ca-11eb-a502-00ff9885c460','Avengers: Endgame'),('6e338d37-93a0-11eb-a502-00ff9885c460','1f3cd355-93ca-11eb-a502-00ff9885c460','Avengers: Endgame'),('6e358622-93a0-11eb-a502-00ff9885c460','1f3cd877-93ca-11eb-a502-00ff9885c460','Friends'),('6e38250f-93a0-11eb-a502-00ff9885c460','1f3cd961-93ca-11eb-a502-00ff9885c460','Gossip Girl'),('d068adc4-939f-11eb-a502-00ff9885c460','1f3caffd-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Fellowship of the Ring'),('d068adc4-939f-11eb-a502-00ff9885c460','1f3ccc8a-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Two Towers'),('d068adc4-939f-11eb-a502-00ff9885c460','1f3ccf51-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Return of the King'),('d068adc4-939f-11eb-a502-00ff9885c460','1f3cd13c-93ca-11eb-a502-00ff9885c460','The Hobbit: The Desolation of Smaug'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','1f3caffd-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Fellowship of the Ring'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','1f3ccc8a-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Two Towers'),('dc6ad6d3-939f-11eb-a502-00ff9885c460','1f3ccf51-93ca-11eb-a502-00ff9885c460','The Lord of the Rings: The Return of the King');


--
-- Dumping events for database 'cpsc471_project_db'
--

--
-- Dumping routines for database 'cpsc471_project_db'
--
/*!50003 DROP PROCEDURE IF EXISTS `addReview` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addReview`(IN Uid varchar(36), IN Email varchar(50), IN Rating INT, IN Description varchar(300))
BEGIN
	SET @username = (SELECT a.username FROM account a WHERE a.Email=Email); 
	INSERT INTO reviews (Uid, Author, Date, Rating, Description) VALUES (Uid, @username, curdate(), Rating, Description);
    SET @date = curdate(); 
    SELECT @username AS Username, @date AS Date; 
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `getCrewDetails` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCrewDetails`(IN Cid varchar(36), IN detailsType varchar(8))
BEGIN
	IF detailsType='info' THEN 
		SELECT * FROM crew c WHERE c.Cid=Cid;
	ELSEIF detailsType = 'programs' THEN 
		SELECT Program_name, w.Uid AS Uid, p.Image AS Image 
        FROM crew c, work_on w, program p 
        WHERE c.Cid=Cid AND w.Cid=c.Cid AND w.Uid=p.Uid; 
    ELSEIF detailsType = 'roles' THEN
		SELECT Crew_role FROM role r WHERE r.Cid=Cid; 
	END IF;
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `getProgramDetails` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProgramDetails`(IN Uid varchar(36), IN detailsType varchar(8))
BEGIN
	IF detailsType='info' THEN 
		SELECT Uid, Name, Type, Image, p.Service_name AS Service_name, User_rating, Age_rating, No_of_seasons, Year, Genre, Description, Run_time, 
		   Arrival_month, Arrival_day, Arrival_year, Departure_month, Departure_day, Departure_year, Logo 
		FROM program p, program_details pd, streaming_schedule s, streaming_service ss 
		WHERE p.Uid = Uid AND p.Uid=pd.Uid AND s.Uid=p.Uid AND ss.Service_name = p.Service_name;  
	ELSEIF detailsType = 'crew' THEN 
		SELECT c.Cid AS Cid, Name, Image FROM work_on w, crew c WHERE w.Uid=Uid AND w.Cid=c.Cid; 
    ELSEIF detailsType = 'reviews' THEN
		SELECT Author, Date, Rating, Description FROM reviews r WHERE r.Uid=Uid;  
	END IF; 	
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `getPrograms` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPrograms`(IN Type varchar(7), IN Email varchar(50))
BEGIN
	SELECT Image, Uid 
    FROM program p 
    WHERE p.Type=Type AND p.Service_name IN (SELECT Service_name 
											 FROM list_of_user_services s
											 WHERE s.Email = Email); 
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `getServices` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getServices`()
BEGIN
	SELECT Sid, s.Service_name AS Service_name, Logo, Location, Price FROM list_of_services ls, streaming_service s WHERE ls.Service_name=s.Service_name; 
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `getUserFavourites` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserFavourites`(IN Email varchar(50), IN favType varchar(7))
BEGIN
	IF favType='crew' THEN 
		SELECT f.Name AS Name, f.Cid AS Cid, c.Image AS Image FROM favourites f, crew c WHERE f.Email=Email AND f.Cid=c.Cid; 
	ELSEIF favType='movies' THEN 
		SELECT f.Name AS Name, f.Uid AS Uid, p.Image AS Image FROM favourites f, program p WHERE f.Email=Email AND f.Uid=p.Uid AND p.Type='Movie';  
    ELSEIF favType='tvshows' THEN 
		SELECT f.Name AS Name, f.Uid AS Uid, p.Image AS Image FROM favourites f, program p WHERE f.Email=Email AND f.Uid=p.Uid AND p.Type='TV Show'; 
	END IF; 
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `manageFavourites` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `manageFavourites`(IN Email varchar(50), IN Uid varchar(36), IN Cid varchar(36), IN method varchar(6))
BEGIN
	IF method='POST' THEN 
		INSERT INTO favourites (Email, Uid, Cid) VALUES (Email, Uid, Cid);  
    ELSEIF method='DELETE' THEN 
		IF Cid = '' THEN 
			DELETE FROM favourites f WHERE f.Email=Email AND f.Uid=Uid; 
		ELSEIF Uid = '' THEN 
			DELETE FROM favourites f WHERE f.Email=Email AND f.Cid=Cid; 
		END IF; 
	END IF; 
END ;;
DELIMITER ;

/*!50003 DROP PROCEDURE IF EXISTS `manageUserService` */;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `manageUserService`(IN Email varchar(50), IN Service_name varchar(50), IN method varchar(6))
BEGIN
	IF method='GET' THEN 
		SELECT * FROM streaming_service AS s, list_of_user_services AS u WHERE u.Email=Email AND s.Service_name=u.Service_name; 
	ELSEIF method = 'POST' THEN 
		INSERT INTO list_of_user_services (Email, Service_name) VALUES (Email, Service_name); 
    ELSEIF method = 'DELETE' THEN
		DELETE FROM list_of_user_services s WHERE s.Email=Email AND s.Service_name=Service_name; 
	END IF; 
END ;;
DELIMITER ;

-- Dump completed on 2021-04-13 18:49:54
