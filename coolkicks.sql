CREATE DATABASE  IF NOT EXISTS `coolkicks` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `coolkicks`;
-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: localhost    Database: coolkicks
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comentario` varchar(300) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Muy buenas zapatillas!','2020-03-02','2020-03-02',1,1),(2,'Muy facheras!','2020-01-22','2020-01-22',1,2),(3,'Se me rompieron al segundo dia! Muy mala calidad','2020-01-24','2020-01-24',1,3),(4,'No las recomiendo. Solo sirven para hacer fotos facheras','2020-01-10','2020-01-10',1,4),(5,'Las mejores lejos. Pero un poco caras','2020-01-27','2020-01-27',1,5),(6,'Muy buenas zapas. Se manchan rapido igual','2020-01-07','2020-01-07',1,6),(7,'Muy buenas para hacer deporte','2020-01-05','2020-01-05',1,7),(8,'El cuero es espectacular. Las super recomiendo','2020-01-01','2020-01-01',1,8),(9,'Estan increibles! Aunque un poco pesadas','2020-01-29','2020-01-29',1,9),(10,'Son muy duras','2020-01-19','2020-01-19',1,10),(11,'Muy buenas zapatillas!','2020-03-02','2020-03-02',2,2),(12,'Muy facheras!','2020-01-22','2020-01-22',2,3),(13,'Se me rompieron al segundo dia! Muy mala calidad','2020-01-24','2020-01-24',2,4),(14,'No las recomiendo. Solo sirven para hacer fotos facheras','2020-01-10','2020-01-10',2,5),(15,'Las mejores lejos. Pero un poco caras','2020-01-27','2020-01-27',2,6),(16,'Muy buenas zapas. Se manchan rapido igual','2020-01-07','2020-01-07',2,7),(17,'Muy buenas para hacer deporte','2020-01-05','2020-01-05',2,8),(18,'El cuero es espectacular. Las super recomiendo','2020-01-01','2020-01-01',2,9),(19,'Estan increibles! Aunque un poco pesadas','2020-01-29','2020-01-29',2,10),(20,'Son muy duras','2020-01-19','2020-01-19',5,1),(21,'Muy buenas zapatillas!','2020-03-02','2020-03-02',3,3),(22,'Muy facheras!','2020-01-22','2020-01-22',3,4),(23,'Se me rompieron al segundo dia! Muy mala calidad','2020-01-24','2020-01-24',3,5),(24,'No las recomiendo. Solo sirven para hacer fotos facheras','2020-01-10','2020-01-10',3,6),(25,'Las mejores lejos. Pero un poco caras','2020-01-27','2020-01-27',3,7),(26,'Muy buenas zapas. Se manchan rapido igual','2020-01-07','2020-01-07',3,8),(27,'Muy buenas para hacer deporte','2020-01-05','2020-01-05',3,9),(28,'El cuero es espectacular. Las super recomiendo','2020-01-01','2020-01-01',3,10),(29,'Estan increibles! Aunque un poco pesadas','2020-01-29','2020-01-29',3,1),(30,'Son muy duras','2020-01-19','2020-01-19',3,2),(31,'Muy buenas zapatillas!','2020-03-02','2020-03-02',4,3),(32,'Muy facheras!','2020-01-22','2020-01-22',4,4),(33,'Se me rompieron al segundo dia! Muy mala calidad','2020-01-24','2020-01-24',4,5),(34,'No las recomiendo. Solo sirven para hacer fotos facheras','2020-01-10','2020-01-10',4,6),(35,'Las mejores lejos. Pero un poco caras','2020-01-27','2020-01-27',4,7),(36,'Muy buenas zapas. Se manchan rapido igual','2020-01-07','2020-01-07',4,8),(37,'Muy buenas para hacer deporte','2020-01-05','2020-01-05',4,10),(38,'El cuero es espectacular. Las super recomiendo','2020-01-01','2020-01-01',5,10),(39,'Estan increibles! Aunque un poco pesadas','2020-01-29','2020-01-29',4,1),(40,'Son muy duras','2020-01-19','2020-01-19',4,2),(41,NULL,NULL,NULL,NULL,NULL),(42,NULL,NULL,NULL,NULL,NULL),(43,NULL,NULL,NULL,NULL,NULL),(44,NULL,NULL,NULL,NULL,NULL),(45,NULL,NULL,NULL,NULL,NULL),(46,NULL,NULL,NULL,NULL,NULL),(47,NULL,NULL,NULL,NULL,NULL),(48,NULL,NULL,NULL,NULL,NULL),(49,NULL,NULL,NULL,NULL,NULL),(50,'hola','2021-06-27','2021-06-27',11,1);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `modelo` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'JORDAN 1 HIGH SATIN SNAKE','/images/products/satinsnake.jpeg','Las zapatillas Jordan 1 HIGH SATIN SNAKE presentan una mezcla de satén, cuero y piel de serpiente sintética','2020-12-23','2021-03-03','2021-03-03',1),(2,'JORDAN 1 MID MAGENTA','/images/products/magenta.jpeg','Las Jordan 1 MID MAGENTA son el primer zapato exclusivo de Michael Jordan equipado en talla de mujer de color magenta, negro y blanco. ','2021-01-10','2021-03-03','2021-03-03',2),(3,'SB DUNK SPARTAN GREEN','/images/products/spartangreen.jpeg','Las SB DUNK SPARTAN GREEN son las zapatillas verdes que no te quitarás en todo el otoño','2020-03-20','2021-03-03','2021-03-03',3),(4,'JORDAN 1 CRIMSON TINT','/images/products/crimsontint.jpeg','Las zapatillas JORDAN 1 CRIMSON TINT añaden un tono rosa coral espectacular. ¿Qué estas esperando? Compralas ya!','2021-05-20','2021-03-03','2021-03-03',4),(5,'JORDAN 1 MID MULTICOLOR','/images/products/multicolor.jpeg','Las zapatillas JORDAN 1 MID MULTICOLOR son solamente para aquellos que les gusta divertirse. Ya su nombre lo delata, tienen todos los colores!','2021-01-24','2021-03-03','2021-03-03',5),(6,'JORDAN 1 YELLOW OCHRE','/images/products/yellowochre.jpeg','Las zapatillas JORDAN 1 YELLOW OCHRE son parte del paquete Best Hand in the Game, vienen en una combinación de colores blanco cumbre, ocre amarillo y negro','2020-01-11','2021-03-03','2021-03-03',1),(7,'JORDAN 1 PINE GREEN','/images/products/pinegreen.jpeg','Las zapatillas JORDAN 1 PINE GREEN son increibles para aquellos que les encanta el color verde, blanco y negro','2021-01-02','2021-03-03','2021-03-03',2),(8,'JORDAN 1 ROOKIE OF THE YEAR','/images/products/rookieoftheyear.jpeg','Las zapatillas JORDAN 1 ROOKIE OF THE YEAR de color piel, son de un gran confort y tacto premium. Además, cuenta con una puntera perforada para una mayor durabilidad','2020-11-17','2021-03-03','2021-03-03',3),(9,'JORDAN 1 OBSIDIAN','/images/products/obsidian.jpeg','Las zapatillas de color Obsidian, coinciden con los colores del equipo de la Universidad de Carolina del Norte, en donde Michael Jordan estudió y jugó antes de dar el salto a la NBA','2020-08-27','2021-03-03','2021-03-03',4),(10,'AIR JORDAN 1 RETRO HIGH Off-White','/images/products/retrohigh.jpeg ','Las zapatillas AIR JORDAN 1 RETRO HIGH Off-White CHICAGO son una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket','2020-05-01','2021-03-03','2021-03-03',5),(21,'prueba sdcfvgbhnjmk,.','/images/products/image-1624755408904.png','hola sdfghnjmk,l.ñ{',NULL,'2021-06-27','2021-06-27',11);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `repassword` varchar(250) NOT NULL,
  `image` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `seguidores` int(10) unsigned DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lola','Marinelli','lmarinelli@udesa.edu.ar','12345','12345','/images/users/face-amico.png','2002-04-05',10,'2021-03-03','2021-03-03'),(2,'Mora','Baylac','mbaylac@udesa.edu.ar','123456','123456','/images/users/face-pana.png','2001-08-27',18,'2021-03-03','2021-03-03'),(3,'Martina','Cappelloni','mcappelloni@udesa.edu.ar','1234','1234','/images/users/face-cuate.png','2002-02-19',7,'2021-03-03','2021-03-03'),(4,'Juana','Garcia','jgarcia@udesa.edu.ar','1234','1234','/images/users/face-rafiki.png','1999-04-20',9,'2021-03-03','2021-03-03'),(5,'Mateo','Lopez','mlopez@udesa.edu.ar','1234','1234','/images/users/face-bro.png','2004-09-01',15,'2021-03-03','2021-03-03'),(11,'lolita','marinelli','hola@hotmail.com','$2a$10$FSat6Mtn4H8jgWG5hYiVxuXY0veyL7bjkUqse8CLFGVHKGqiNyzs6','$2a$10$qYkIDnICLnL3gFnNmgLcbeYTe4S5RAOPCAqgO5okR0zphTxbnK0cu','/images/users/avatar-1624755343844.png','2021-06-11',NULL,'2021-06-27','2021-06-27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'coolkicks'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-27 10:44:05

ALTER TABLE product
DROP COLUMN fecha;

ALTER TABLE users
DROP COLUMN seguidores;
