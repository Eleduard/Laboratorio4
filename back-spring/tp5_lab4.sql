/*
SQLyog Ultimate v8.55 
MySQL - 8.0.34 : Database - instrumentosdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`instrumentosdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `instrumentosdb`;

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id_categoria` bigint NOT NULL,
  `denominacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `categoria` */

insert  into `categoria`(`id_categoria`,`denominacion`) values (1,'Cuerda'),(2,'Viento'),(3,'Percusión'),(4,'Teclado'),(5,'Electrónico');

/*Table structure for table `instrumento` */

DROP TABLE IF EXISTS `instrumento`;

CREATE TABLE `instrumento` (
  `cantidad_vendida` int DEFAULT NULL,
  `id_instrumento` int NOT NULL AUTO_INCREMENT,
  `precio` double NOT NULL,
  `categoria_id` bigint DEFAULT NULL,
  `costo_envio` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `instrumento` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_instrumento`),
  KEY `FKipyofytm43se6wp3cyan1rlwk` (`categoria_id`),
  CONSTRAINT `FKipyofytm43se6wp3cyan1rlwk` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `instrumento` */

insert  into `instrumento`(`cantidad_vendida`,`id_instrumento`,`precio`,`categoria_id`,`costo_envio`,`descripcion`,`imagen`,`instrumento`,`marca`,`modelo`) values (28,12,2450,1,'G','Otra cosa','nro10.jpg','Mandolina Instrumento Musical Stagg Sunburst','Stagg','M20'),(5,15,850,3,'300',NULL,'nro6.jpg','Shekeres. Instrumento. Música. Artesanía. ','Azalea Artesanías','Cuentas de madera'),(10,22,325,3,'150',NULL,'nro9.jpg','Pandereta Pandero Instrumento Musical ','DyM ventas','32 sonajas'),(3,23,260,3,'250',NULL,'nro8.jpg','Triangulo Musical 24 Cm Percusion','LBP','24'),(2,24,2250,3,'G',NULL,'nro7.jpg','Bar Chimes Lp Cortina Musical 72 Barras ','FM','LATIN'),(0,26,17000,4,'2000',NULL,'nro3.jpg','Antiguo Piano Aleman Con Candelabros. ','Neumeyer','Stratus'),(5,27,500,1,'G',NULL,'nro4.jpg','Guitarra Ukelele Infantil Grande 60cm','GUITARRA','UKELELE'),(1375,28,2250,5,'G',NULL,'nro2.jpg','Teclado Organo Electronico Musical Instrumento 54 Teclas ','GADNIC','T01'),(15,29,2700,3,'300',NULL,'nro1.jpg','Instrumentos De Percusión Niños Set Musical Con Estuche ','KNIGHT','LB17'),(380,30,850,5,'250',NULL,'nro5.jpg','Batería Musical Infantil Juguete Niño 9 Piezas Palillos ','Bateria','Infantil');

/*Table structure for table `pedido` */

DROP TABLE IF EXISTS `pedido`;

CREATE TABLE `pedido` (
  `id_pedido` bigint NOT NULL AUTO_INCREMENT,
  `fecha_pedido` datetime(6) DEFAULT NULL,
  `total_pedido` double NOT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `pedido` */

insert  into `pedido`(`id_pedido`,`fecha_pedido`,`total_pedido`) values (38,'2024-05-24 12:10:44.318000',5750),(39,'2024-05-24 15:45:01.970000',5225),(40,'2024-05-24 17:43:33.866000',5750),(41,'2024-05-24 20:11:33.221000',0);

/*Table structure for table `pedido_detalle` */

DROP TABLE IF EXISTS `pedido_detalle`;

CREATE TABLE `pedido_detalle` (
  `id_pedido_detalle` bigint NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `instrumento_id` int DEFAULT NULL,
  `pedido_id` bigint DEFAULT NULL,
  `detalles_id_pedido` bigint DEFAULT NULL,
  `pedido_id_pedido` bigint DEFAULT NULL,
  PRIMARY KEY (`id_pedido_detalle`),
  KEY `FKoa5c7ikdpmiwn2aalf6aqskwi` (`instrumento_id`),
  KEY `FKhuvcqbd92kc4eqypgqmyi17cb` (`pedido_id`),
  KEY `FK3v8d079q05jg3fv90jkasw5mu` (`detalles_id_pedido`),
  KEY `FK1plem0lsddipt5vfmwofjukvj` (`pedido_id_pedido`),
  CONSTRAINT `FK1plem0lsddipt5vfmwofjukvj` FOREIGN KEY (`pedido_id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FK3v8d079q05jg3fv90jkasw5mu` FOREIGN KEY (`detalles_id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FKhuvcqbd92kc4eqypgqmyi17cb` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `FKoa5c7ikdpmiwn2aalf6aqskwi` FOREIGN KEY (`instrumento_id`) REFERENCES `instrumento` (`id_instrumento`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `pedido_detalle` */

insert  into `pedido_detalle`(`id_pedido_detalle`,`cantidad`,`instrumento_id`,`pedido_id`,`detalles_id_pedido`,`pedido_id_pedido`) values (6,2,12,38,NULL,NULL),(7,1,15,38,NULL,NULL),(8,2,12,39,NULL,NULL),(9,1,22,39,NULL,NULL),(10,2,12,40,NULL,NULL),(11,1,15,40,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
