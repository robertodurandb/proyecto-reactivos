-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: dbexamenes
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `idarea` int NOT NULL AUTO_INCREMENT,
  `namearea` varchar(45) NOT NULL,
  PRIMARY KEY (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Bioquimica'),(2,'Hematologia'),(3,'Inmunologia'),(4,'Coagulacion'),(6,'Hormonas'),(7,'Citometria de Flujo'),(8,'Medicina Transfusional'),(9,'Banco de Organos'),(10,'Hematologia');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado` (
  `idestado` int NOT NULL AUTO_INCREMENT,
  `nameestado` varchar(25) NOT NULL,
  PRIMARY KEY (`idestado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'agotado'),(2,'disponible');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen`
--

DROP TABLE IF EXISTS `examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen` (
  `idexamen` int NOT NULL AUTO_INCREMENT,
  `codexamen` varchar(10) NOT NULL,
  `nameexamen` varchar(30) NOT NULL,
  `descriptionexamen` varchar(45) DEFAULT NULL,
  `area_idarea` int NOT NULL,
  `tipomuestra_idtipomuestra` int NOT NULL,
  `estado` int NOT NULL,
  PRIMARY KEY (`idexamen`),
  KEY `fk_examen_area1_idx` (`area_idarea`),
  KEY `fk_examen_tipomuestra1_idx` (`tipomuestra_idtipomuestra`),
  KEY `FK_estado` (`estado`),
  CONSTRAINT `FK_estado` FOREIGN KEY (`estado`) REFERENCES `estado` (`idestado`),
  CONSTRAINT `fk_examen_area1` FOREIGN KEY (`area_idarea`) REFERENCES `area` (`idarea`),
  CONSTRAINT `fk_examen_tipomuestra1` FOREIGN KEY (`tipomuestra_idtipomuestra`) REFERENCES `tipomuestra` (`idtipomuestra`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen`
--

LOCK TABLES `examen` WRITE;
/*!40000 ALTER TABLE `examen` DISABLE KEYS */;
INSERT INTO `examen` VALUES (2,'81001','EXAMEN DE ORINA SIMPLE','Recolectar su orina previo aséo',1,2,2),(3,'85025','HEMOGRAMA','homogenizar la muestra',2,4,2),(4,'85018','HEMATOCRITO','homogenizar la muestra',2,4,2),(5,'82947','GLUCOSA',NULL,1,1,2),(6,'84520','UREA',NULL,1,1,2),(7,'82565','CREATININA',NULL,1,1,2);
/*!40000 ALTER TABLE `examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen_has_proveedor`
--

DROP TABLE IF EXISTS `examen_has_proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen_has_proveedor` (
  `examen_idexamen` int NOT NULL,
  `proveedor_idproveedor` int NOT NULL,
  PRIMARY KEY (`examen_idexamen`,`proveedor_idproveedor`),
  KEY `fk_examen_has_proveedor_proveedor1_idx` (`proveedor_idproveedor`),
  KEY `fk_examen_has_proveedor_examen1_idx` (`examen_idexamen`),
  CONSTRAINT `fk_examen_has_proveedor_examen1` FOREIGN KEY (`examen_idexamen`) REFERENCES `examen` (`idexamen`),
  CONSTRAINT `fk_examen_has_proveedor_proveedor1` FOREIGN KEY (`proveedor_idproveedor`) REFERENCES `proveedor` (`idproveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen_has_proveedor`
--

LOCK TABLES `examen_has_proveedor` WRITE;
/*!40000 ALTER TABLE `examen_has_proveedor` DISABLE KEYS */;
INSERT INTO `examen_has_proveedor` VALUES (3,1);
/*!40000 ALTER TABLE `examen_has_proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen_has_registro`
--

DROP TABLE IF EXISTS `examen_has_registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen_has_registro` (
  `examen_idexamen` int NOT NULL,
  `registro_idregistro` int NOT NULL,
  `estado_idestado` int NOT NULL,
  PRIMARY KEY (`examen_idexamen`,`registro_idregistro`),
  KEY `fk_examen_has_registro_registro1_idx` (`registro_idregistro`),
  KEY `fk_examen_has_registro_examen1_idx` (`examen_idexamen`),
  KEY `fk_examen_has_registro_estado1_idx` (`estado_idestado`),
  CONSTRAINT `fk_examen_has_registro_estado1` FOREIGN KEY (`estado_idestado`) REFERENCES `estado` (`idestado`),
  CONSTRAINT `fk_examen_has_registro_examen1` FOREIGN KEY (`examen_idexamen`) REFERENCES `examen` (`idexamen`),
  CONSTRAINT `fk_examen_has_registro_registro1` FOREIGN KEY (`registro_idregistro`) REFERENCES `registro` (`idregistro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen_has_registro`
--

LOCK TABLES `examen_has_registro` WRITE;
/*!40000 ALTER TABLE `examen_has_registro` DISABLE KEYS */;
INSERT INTO `examen_has_registro` VALUES (3,2,1),(4,2,1),(3,3,2),(4,3,2);
/*!40000 ALTER TABLE `examen_has_registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `idperfil` int NOT NULL AUTO_INCREMENT,
  `nameperfil` varchar(45) NOT NULL,
  `codeperfil` varchar(15) NOT NULL,
  PRIMARY KEY (`idperfil`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (2,'PERFIL BIOQUIMICO','B0077'),(3,'PERFIL ELECTROLITOS','B0078');
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil_has_examen`
--

DROP TABLE IF EXISTS `perfil_has_examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil_has_examen` (
  `perfil_idperfil` int NOT NULL,
  `examen_idexamen` int NOT NULL,
  PRIMARY KEY (`perfil_idperfil`,`examen_idexamen`),
  KEY `fk_perfil_has_examen_examen1_idx` (`examen_idexamen`),
  KEY `fk_perfil_has_examen_perfil1_idx` (`perfil_idperfil`),
  CONSTRAINT `fk_perfil_has_examen_examen1` FOREIGN KEY (`examen_idexamen`) REFERENCES `examen` (`idexamen`),
  CONSTRAINT `fk_perfil_has_examen_perfil1` FOREIGN KEY (`perfil_idperfil`) REFERENCES `perfil` (`idperfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil_has_examen`
--

LOCK TABLES `perfil_has_examen` WRITE;
/*!40000 ALTER TABLE `perfil_has_examen` DISABLE KEYS */;
INSERT INTO `perfil_has_examen` VALUES (2,5),(2,6),(2,7);
/*!40000 ALTER TABLE `perfil_has_examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `idproveedor` int NOT NULL AUTO_INCREMENT,
  `codeproveedor` int NOT NULL,
  `nameproveedor` varchar(30) NOT NULL,
  PRIMARY KEY (`idproveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,0,'ESSALUD'),(2,1,'ROCHE'),(3,5,'DIAGNOSTICA PERUANA'),(4,6,'SIMED'),(5,7,'INMUNOCHEM'),(6,9,'DIAGNOSTICO UAL'),(7,10,'REPRESENTACIONES MEDICAS'),(8,11,'ROCHEM BIOCARE'),(9,14,'SISTEMAS ANALITICOS'),(10,22,'BD DIAGNOSTIC'),(11,29,'CIENTIFICA ANDINA'),(12,30,'CYTBIO'),(13,33,'DIAGNOSTIC TEST'),(14,36,'SUDAMERICANA SAC'),(15,39,'LABDEALERS MEDICA');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registro` (
  `idregistro` int NOT NULL AUTO_INCREMENT,
  `fecharegistro` date NOT NULL,
  `usuario_iduser` int NOT NULL,
  `horaregistro` time NOT NULL,
  PRIMARY KEY (`idregistro`),
  KEY `fk_registro_usuario1_idx` (`usuario_iduser`),
  CONSTRAINT `fk_registro_usuario1` FOREIGN KEY (`usuario_iduser`) REFERENCES `usuario` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` VALUES (1,'2023-01-29',9,'14:35:00'),(2,'2023-01-30',9,'00:13:00'),(3,'2023-01-31',9,'13:19:00');
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipomuestra`
--

DROP TABLE IF EXISTS `tipomuestra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipomuestra` (
  `idtipomuestra` int NOT NULL AUTO_INCREMENT,
  `codetipo` int NOT NULL,
  `nametipo` varchar(45) NOT NULL,
  PRIMARY KEY (`idtipomuestra`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipomuestra`
--

LOCK TABLES `tipomuestra` WRITE;
/*!40000 ALTER TABLE `tipomuestra` DISABLE KEYS */;
INSERT INTO `tipomuestra` VALUES (1,1,'SUERO'),(2,21,'ORINA SIMPLE'),(3,41,'SANGRE TOTAL'),(4,42,'SANGRE EDTA'),(5,22,'ORINA DE 24 HORAS'),(6,47,'PLASMA CITRATO');
/*!40000 ALTER TABLE `tipomuestra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `dniuser` varchar(15) NOT NULL,
  `lastnameuser` varchar(30) NOT NULL,
  `firstnameuser` varchar(30) NOT NULL,
  `cellphoneuser` int DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `estado` char(5) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (9,'45646940','DURAND BACA','ROBERTO',991353720,'$2b$10$kV.g1Wl/4lS/O5jHWDaRC.OfrFQsQefc2nANvPYJUYa3EWzOuY2ZW','A');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-09 14:56:46
