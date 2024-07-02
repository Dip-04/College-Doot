-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: college_doot
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add student',7,'add_student'),(26,'Can change student',7,'change_student'),(27,'Can delete student',7,'delete_student'),(28,'Can view student',7,'view_student'),(29,'Can add course',8,'add_course'),(30,'Can change course',8,'change_course'),(31,'Can delete course',8,'delete_course'),(32,'Can view course',8,'view_course'),(33,'Can add course category',9,'add_coursecategory'),(34,'Can change course category',9,'change_coursecategory'),(35,'Can delete course category',9,'delete_coursecategory'),(36,'Can view course category',9,'view_coursecategory'),(37,'Can add teacher',10,'add_teacher'),(38,'Can change teacher',10,'change_teacher'),(39,'Can delete teacher',10,'delete_teacher'),(40,'Can view teacher',10,'view_teacher'),(41,'Can add chapter',11,'add_chapter'),(42,'Can change chapter',11,'change_chapter'),(43,'Can delete chapter',11,'delete_chapter'),(44,'Can view chapter',11,'view_chapter'),(45,'Can add student course enrollment',12,'add_studentcourseenrollment'),(46,'Can change student course enrollment',12,'change_studentcourseenrollment'),(47,'Can delete student course enrollment',12,'delete_studentcourseenrollment'),(48,'Can view student course enrollment',12,'view_studentcourseenrollment'),(49,'Can add course rating',13,'add_courserating'),(50,'Can change course rating',13,'change_courserating'),(51,'Can delete course rating',13,'delete_courserating'),(52,'Can view course rating',13,'view_courserating'),(53,'Can add student favorite course',14,'add_studentfavoritecourse'),(54,'Can change student favorite course',14,'change_studentfavoritecourse'),(55,'Can delete student favorite course',14,'delete_studentfavoritecourse'),(56,'Can view student favorite course',14,'view_studentfavoritecourse'),(57,'Can add student assignment',15,'add_studentassignment'),(58,'Can change student assignment',15,'change_studentassignment'),(59,'Can delete student assignment',15,'delete_studentassignment'),(60,'Can view student assignment',15,'view_studentassignment'),(61,'Can add notification',16,'add_notification'),(62,'Can change notification',16,'change_notification'),(63,'Can delete notification',16,'delete_notification'),(64,'Can view notification',16,'view_notification'),(65,'Can add notification1',17,'add_notification1'),(66,'Can change notification1',17,'change_notification1'),(67,'Can delete notification1',17,'delete_notification1'),(68,'Can view notification1',17,'view_notification1'),(69,'Can add quiz questions',18,'add_quizquestions'),(70,'Can change quiz questions',18,'change_quizquestions'),(71,'Can delete quiz questions',18,'delete_quizquestions'),(72,'Can view quiz questions',18,'view_quizquestions'),(73,'Can add quiz',19,'add_quiz'),(74,'Can change quiz',19,'change_quiz'),(75,'Can delete quiz',19,'delete_quiz'),(76,'Can view quiz',19,'view_quiz'),(77,'Can add course quiz',20,'add_coursequiz'),(78,'Can change course quiz',20,'change_coursequiz'),(79,'Can delete course quiz',20,'delete_coursequiz'),(80,'Can view course quiz',20,'view_coursequiz'),(81,'Can add attemp quiz',21,'add_attempquiz'),(82,'Can change attemp quiz',21,'change_attempquiz'),(83,'Can delete attemp quiz',21,'delete_attempquiz'),(84,'Can view attemp quiz',21,'view_attempquiz'),(85,'Can add study material',22,'add_studymaterial'),(86,'Can change study material',22,'change_studymaterial'),(87,'Can delete study material',22,'delete_studymaterial'),(88,'Can view study material',22,'view_studymaterial'),(89,'Can add teacher studentchat',23,'add_teacherstudentchat'),(90,'Can change teacher studentchat',23,'change_teacherstudentchat'),(91,'Can delete teacher studentchat',23,'delete_teacherstudentchat'),(92,'Can view teacher studentchat',23,'view_teacherstudentchat');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$H9Vz2qBOfidgbzU5IZWpX1$DVJFW/a+v/uF+0J9ehXDr63snMkcEoGa84JDrjAdlZE=','2024-01-31 17:07:21.548903',1,'Diptish','','','diptishgohane04@gmail.com',1,1,'2023-09-16 09:19:06.751986');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-09-17 12:12:00.550178','3','Course object (3)',3,'',8,1),(2,'2023-09-17 12:12:00.554468','2','Course object (2)',3,'',8,1),(3,'2023-09-17 12:12:00.555473','1','Course object (1)',3,'',8,1),(4,'2023-09-17 12:12:15.807699','2','Teacher object (2)',3,'',10,1),(5,'2023-09-17 12:13:00.848274','3','Teacher object (3)',1,'[{\"added\": {}}]',10,1),(6,'2023-09-17 12:13:48.141343','5','Course object (5)',1,'[{\"added\": {}}]',8,1),(7,'2023-10-01 15:03:35.147460','16','Dip enrolled in iot 2',3,'',12,1),(8,'2023-10-01 15:03:35.154480','15','Dip enrolled in iot 2',3,'',12,1),(9,'2023-10-01 15:03:35.154480','14','Dip enrolled in iot 2',3,'',12,1),(10,'2023-10-01 15:03:35.157926','13','Dip enrolled in iot 2',3,'',12,1),(11,'2023-10-01 15:03:35.157926','12','Dip enrolled in iot 2',3,'',12,1),(12,'2023-10-01 15:03:35.157926','11','Dip enrolled in iot 2',3,'',12,1),(13,'2023-10-01 15:03:35.161426','10','Dip enrolled in iot 2',3,'',12,1),(14,'2023-10-01 15:03:35.161426','9','Dip enrolled in iot 2',3,'',12,1),(15,'2023-10-01 15:03:35.164926','8','Dip enrolled in iot 2',3,'',12,1),(16,'2023-10-01 15:03:35.164926','7','Dip enrolled in iot 2',3,'',12,1),(17,'2023-10-01 15:03:35.164926','6','Dip enrolled in iot 2',3,'',12,1),(18,'2023-10-01 15:03:35.168425','5','Dip enrolled in iot 2',3,'',12,1),(19,'2023-10-01 15:03:35.168425','4','Dip enrolled in iot 2',3,'',12,1),(20,'2023-10-01 15:03:35.168425','3','Dip enrolled in iot 2',3,'',12,1),(21,'2023-10-01 15:03:35.168425','2','Dip enrolled in iot 2',3,'',12,1),(22,'2023-10-01 15:03:35.171924','1','Dip enrolled in iot 2',3,'',12,1),(23,'2023-10-21 10:17:52.681243','3','IOT CSF2 - Dip 0',3,'',13,1),(24,'2023-10-21 10:17:52.681243','2','iot 2 - Dip 0',3,'',13,1),(25,'2023-10-21 10:17:52.684744','1','iot 2 - Dip 0',3,'',13,1),(26,'2023-10-21 13:31:07.355239','2','Dbms',1,'[{\"added\": {}}]',9,1),(27,'2023-10-21 13:31:54.476696','7','DBMS',1,'[{\"added\": {}}]',8,1),(28,'2023-10-22 08:10:57.966789','35','klnkln',3,'',8,1),(29,'2023-10-22 08:10:57.970289','34','klnkln',3,'',8,1),(30,'2023-10-22 08:10:57.973787','33','klnkln',3,'',8,1),(31,'2023-10-22 08:10:57.977283','32','klnkln',3,'',8,1),(32,'2023-10-22 08:10:57.977283','31','klnkln',3,'',8,1),(33,'2023-10-22 08:10:57.980783','30','vcvcvf',3,'',8,1),(34,'2023-10-22 08:10:57.980783','29','vcvcvf',3,'',8,1),(35,'2023-10-22 08:10:57.984355','28','vcvcvf',3,'',8,1),(36,'2023-10-22 08:10:57.984355','27','vcvcvf',3,'',8,1),(37,'2023-10-22 08:10:57.987841','26','vcvcvf',3,'',8,1),(38,'2023-10-22 08:10:57.987841','25','vcvcvf',3,'',8,1),(39,'2023-10-22 08:10:57.991341','24','vcvcvf',3,'',8,1),(40,'2023-10-22 08:10:57.991341','23','vcvcvf',3,'',8,1),(41,'2023-10-22 08:10:57.994765','22','vcvcvf',3,'',8,1),(42,'2023-10-22 08:10:57.994765','21','vcvcvf',3,'',8,1),(43,'2023-10-22 08:10:57.998262','20','vcvcvf',3,'',8,1),(44,'2023-10-22 08:10:57.998262','19','vcvcvf',3,'',8,1),(45,'2023-10-22 08:10:57.998262','18','vcvcvf',3,'',8,1),(46,'2023-10-22 08:10:58.001759','17','vcvcvf',3,'',8,1),(47,'2023-10-22 08:10:58.001759','16','dbn',3,'',8,1),(48,'2023-10-22 08:10:58.005255','15','dbn',3,'',8,1),(49,'2023-10-22 08:10:58.005255','14','dbn',3,'',8,1),(50,'2023-10-22 08:10:58.005255','13','dbn',3,'',8,1),(51,'2023-10-22 08:10:58.008759','12','dbn',3,'',8,1),(52,'2023-10-22 08:10:58.008759','11','dbn',3,'',8,1),(53,'2023-10-22 08:10:58.012249','10','dbn',3,'',8,1),(54,'2023-10-22 08:10:58.012249','9','dbn',3,'',8,1),(55,'2023-10-22 08:10:58.012249','8','dbn',3,'',8,1),(56,'2023-10-26 13:33:58.191768','4','Notification object (4)',2,'[{\"changed\": {\"fields\": [\"Teacher\", \"Student\"]}}]',16,1),(57,'2023-10-26 13:49:16.616389','5','Notification object (5)',3,'',16,1),(58,'2023-10-26 13:49:16.665080','4','Notification object (4)',3,'',16,1),(59,'2023-10-26 13:49:16.686652','3','Notification object (3)',3,'',16,1),(60,'2023-10-26 13:49:16.690187','2','Notification object (2)',3,'',16,1),(61,'2023-10-26 13:49:16.693648','1','Notification object (1)',3,'',16,1),(62,'2023-10-26 13:49:25.203969','8','Notification object (8)',3,'',16,1),(63,'2023-10-26 13:49:25.207425','7','Notification object (7)',3,'',16,1),(64,'2023-10-26 13:49:25.207425','6','Notification object (6)',3,'',16,1),(65,'2023-10-29 08:13:24.929748','1','StudyMaterial object (1)',1,'[{\"added\": {}}]',22,1),(66,'2023-10-29 08:20:35.610034','2','StudyMaterial object (2)',1,'[{\"added\": {}}]',22,1),(67,'2023-10-29 08:52:12.758379','9','Chapter object (9)',1,'[{\"added\": {}}]',11,1),(68,'2023-10-30 17:26:01.491966','8','Teacher object (8)',3,'',10,1),(69,'2023-10-30 17:26:01.500450','7','Teacher object (7)',3,'',10,1),(70,'2023-10-30 17:26:01.501446','6','Teacher object (6)',3,'',10,1),(71,'2023-10-30 17:26:01.503438','5','Teacher object (5)',3,'',10,1),(72,'2023-10-30 17:26:01.503438','4','Teacher object (4)',3,'',10,1),(73,'2023-10-30 17:26:01.504435','3','Teacher object (3)',3,'',10,1),(74,'2023-10-30 17:26:01.505431','1','Teacher object (1)',3,'',10,1),(75,'2023-10-30 17:26:19.641019','2','Jay',3,'',7,1),(76,'2023-10-30 17:26:19.642015','1','Dip',3,'',7,1),(77,'2023-10-30 17:36:34.456924','3','AIML',1,'[{\"added\": {}}]',9,1),(78,'2023-10-30 17:36:44.219022','2','Dbms',3,'',9,1),(79,'2023-10-30 17:36:44.222117','1','IOT',3,'',9,1),(80,'2023-10-30 17:37:07.511418','4','IOT',1,'[{\"added\": {}}]',9,1),(81,'2023-10-30 17:37:39.491063','5','DBMS',1,'[{\"added\": {}}]',9,1),(82,'2023-10-30 17:38:22.003208','6','CIS',1,'[{\"added\": {}}]',9,1),(83,'2023-10-30 18:43:49.758677','4','Diptish',3,'',7,1),(84,'2023-10-30 18:44:08.354263','3','Diptish',3,'',7,1),(85,'2024-01-31 16:47:29.671075','9','Teacher object (9)',2,'[{\"changed\": {\"fields\": [\"Featured img\"]}}]',10,1),(86,'2024-01-31 16:47:40.202820','10','Teacher object (10)',2,'[{\"changed\": {\"fields\": [\"Featured img\"]}}]',10,1),(87,'2024-01-31 16:47:49.229170','11','Teacher object (11)',2,'[{\"changed\": {\"fields\": [\"Featured img\"]}}]',10,1),(88,'2024-01-31 16:48:21.018680','12','Teacher object (12)',2,'[{\"changed\": {\"fields\": [\"Featured img\"]}}]',10,1),(89,'2024-01-31 16:48:46.600772','9','Teacher object (9)',2,'[{\"changed\": {\"fields\": [\"First name\"]}}]',10,1),(90,'2024-01-31 16:48:55.166158','10','Teacher object (10)',2,'[{\"changed\": {\"fields\": [\"First name\"]}}]',10,1),(91,'2024-01-31 16:49:06.949472','11','Teacher object (11)',2,'[{\"changed\": {\"fields\": [\"First name\"]}}]',10,1),(92,'2024-01-31 16:49:16.532962','12','Teacher object (12)',2,'[{\"changed\": {\"fields\": [\"First name\"]}}]',10,1),(93,'2024-01-31 16:57:08.912418','25','Diptish enrolled in DBMS',3,'',12,1),(94,'2024-01-31 16:57:52.360463','29','Diptish enrolled in DBMS',3,'',12,1),(95,'2024-01-31 17:10:00.736566','30','Diptish enrolled in DBMS',3,'',12,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(21,'main','attempquiz'),(11,'main','chapter'),(8,'main','course'),(9,'main','coursecategory'),(20,'main','coursequiz'),(13,'main','courserating'),(16,'main','notification'),(17,'main','notification1'),(19,'main','quiz'),(18,'main','quizquestions'),(7,'main','student'),(15,'main','studentassignment'),(12,'main','studentcourseenrollment'),(14,'main','studentfavoritecourse'),(22,'main','studymaterial'),(10,'main','teacher'),(23,'main','teacherstudentchat'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-09-16 09:07:44.164841'),(2,'auth','0001_initial','2023-09-16 09:07:44.393658'),(3,'admin','0001_initial','2023-09-16 09:07:44.448007'),(4,'admin','0002_logentry_remove_auto_add','2023-09-16 09:07:44.453987'),(5,'admin','0003_logentry_add_action_flag_choices','2023-09-16 09:07:44.459965'),(6,'contenttypes','0002_remove_content_type_name','2023-09-16 09:07:44.498879'),(7,'auth','0002_alter_permission_name_max_length','2023-09-16 09:07:44.524308'),(8,'auth','0003_alter_user_email_max_length','2023-09-16 09:07:44.541287'),(9,'auth','0004_alter_user_username_opts','2023-09-16 09:07:44.548261'),(10,'auth','0005_alter_user_last_login_null','2023-09-16 09:07:44.577165'),(11,'auth','0006_require_contenttypes_0002','2023-09-16 09:07:44.580115'),(12,'auth','0007_alter_validators_add_error_messages','2023-09-16 09:07:44.587094'),(13,'auth','0008_alter_user_username_max_length','2023-09-16 09:07:44.619508'),(14,'auth','0009_alter_user_last_name_max_length','2023-09-16 09:07:44.692304'),(15,'auth','0010_alter_group_name_max_length','2023-09-16 09:07:44.710382'),(16,'auth','0011_update_proxy_permissions','2023-09-16 09:07:44.717806'),(17,'auth','0012_alter_user_first_name_max_length','2023-09-16 09:07:44.745122'),(18,'sessions','0001_initial','2023-09-16 09:07:44.762143'),(19,'main','0001_initial','2023-09-16 09:13:56.450109'),(20,'main','0002_chapter','2023-09-17 13:13:30.956758'),(21,'main','0003_teacher_detail_alter_chapter_course_and_more','2023-09-20 09:22:01.769340'),(22,'main','0004_teacher_featured_img','2023-09-20 09:43:16.034275'),(23,'main','0005_remove_student_address_remove_student_full_name_and_more','2023-10-01 10:20:18.271220'),(24,'main','0006_studentcourseenrollmen','2023-10-01 11:16:06.678898'),(25,'main','0007_rename_studentcourseenrollmen_studentcourseenrollment','2023-10-01 11:16:06.705363'),(26,'main','0008_alter_studentcourseenrollment_enrolled_time','2023-10-02 13:16:10.397201'),(27,'main','0009_courserating','2023-10-21 08:14:01.268930'),(28,'main','0010_alter_courserating_options','2023-10-21 14:07:59.004201'),(29,'main','0011_alter_course_teacher','2023-10-23 16:52:26.961846'),(30,'main','0012_alter_course_teacher','2023-10-23 17:01:33.228838'),(31,'main','0013_studentfavoritecourse','2023-10-24 09:08:12.357627'),(32,'main','0014_studentassignment','2023-10-24 11:54:17.869462'),(33,'main','0015_studentassignment_student_status','2023-10-25 11:48:12.712064'),(34,'main','0016_notification','2023-10-26 11:28:20.848168'),(35,'main','0017_alter_notification_options_and_more','2023-10-26 11:33:03.847905'),(36,'main','0018_notification_student_notification_teacher','2023-10-26 11:35:43.132976'),(37,'main','0019_notification_notif_subject','2023-10-26 11:42:17.347773'),(38,'main','0020_alter_notification_notifiread_status','2023-10-26 12:30:29.489689'),(39,'main','0021_rename_notifiread_status_notification_notifread_status','2023-10-26 12:34:02.104767'),(40,'main','0022_notification1','2023-10-26 13:53:14.274483'),(41,'main','0023_quiz_quizquestions_coursequiz','2023-10-26 16:43:58.577599'),(42,'main','0024_quiz_teacher','2023-10-26 17:18:16.965805'),(43,'main','0025_coursequiz_teacher','2023-10-27 13:32:23.805689'),(44,'main','0026_attempquiz','2023-10-28 12:04:53.035546'),(45,'main','0027_attempquiz_right_ans','2023-10-28 13:43:39.087830'),(46,'main','0028_alter_attempquiz_question','2023-10-28 15:13:23.793204'),(47,'main','0029_studymaterial','2023-10-29 07:47:53.571568'),(48,'main','0030_student_otp_digit_student_verify_status_and_more','2023-10-29 09:49:11.734425'),(49,'main','0031_remove_student_otp_digit_and_more','2023-10-29 10:51:30.657569'),(50,'main','0032_teacherstudentchat','2023-10-31 15:21:43.022129');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2f02wdmwvpxkfas40u2wxsolbngoxrhw','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1quTXe:v6tpCZlLUQ3R97_etfg0lXumq42-nNDI7w0ktLK_f8k','2023-11-05 08:10:34.246673'),('5fz4l1k19k670f21lxpqv0rm93z398r6','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1rVE3V:fm0phedSArCHuZ1pT5h-bNG51KV4OOAUYjK9h_QJgMQ','2024-02-14 17:07:21.597873'),('aal13m6j2x256auh6nbzhzm1zo8bzykl','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1qvyvZ:8QsyaiZm26z7nqbZgFpzL6-mWoplflFuCkZdwSyWoDA','2023-11-09 11:53:29.877186'),('k5rotkl5i06smy9lknrx1n8p7cv40kp2','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1qhS5Y:gf54hMrXbAsoieAPU5_epusDQs_FA25tdV_3RnlA5lw','2023-09-30 09:59:44.276060'),('nnj7cjy05k0uc7aqr1inylo1aoj8sfgf','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1qu92p:hRngrXD1fhzActtAns_wRZQSpVRvDYgNmSamy7hxVX8','2023-11-04 10:17:23.229272'),('ufjkd2ravt0bb0rkqpyzo7j1zbofzs7c','.eJxVjM0OwiAQhN-FsyFLWf48evcZyC4QqRqalPZkfHcl6UFPk8z3zbxEpH2rce9ljXMWZ6HE6bdjSo_SBsh3ardFpqVt68xyKPKgXV6XXJ6Xw_07qNTrWBejIAAYGxjQUfAaOeEEkBTa9E0NSQOyQcXWW7LFWZcnHTw641m8P6TJNhA:1qmuSB:LAuzPZYqEJuL3EsqfG8MvQSmx94sGB_qkWj5z9fz6AU','2023-10-15 11:17:39.161002');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_attempquiz`
--

DROP TABLE IF EXISTS `main_attempquiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_attempquiz` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `add_time` datetime(6) NOT NULL,
  `question_id` bigint DEFAULT NULL,
  `quiz_id` bigint NOT NULL,
  `student_id` bigint DEFAULT NULL,
  `right_ans` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `main_attempquiz_quiz_id_9ab8ae1c_fk_main_quiz_id` (`quiz_id`),
  KEY `main_attempquiz_student_id_3e7d6337_fk_main_student_id` (`student_id`),
  KEY `main_attempquiz_question_id_7cb0a734_fk_main_quizquestions_id` (`question_id`),
  CONSTRAINT `main_attempquiz_question_id_7cb0a734_fk_main_quizquestions_id` FOREIGN KEY (`question_id`) REFERENCES `main_quizquestions` (`id`),
  CONSTRAINT `main_attempquiz_quiz_id_9ab8ae1c_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`),
  CONSTRAINT `main_attempquiz_student_id_3e7d6337_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_attempquiz`
--

LOCK TABLES `main_attempquiz` WRITE;
/*!40000 ALTER TABLE `main_attempquiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_attempquiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_chapter`
--

DROP TABLE IF EXISTS `main_chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_chapter` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` longtext NOT NULL,
  `video` varchar(100) DEFAULT NULL,
  `remarks` longtext,
  `course_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_chapter_course_id_72de819c_fk_main_course_id` (`course_id`),
  CONSTRAINT `main_chapter_course_id_72de819c_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_chapter`
--

LOCK TABLES `main_chapter` WRITE;
/*!40000 ALTER TABLE `main_chapter` DISABLE KEYS */;
INSERT INTO `main_chapter` VALUES (10,'Introduction','Database Management System','chapter_videos/What_is_Database__Database_Management_System_DBMS__Intro_to_DBMS_720_x_1280.mp4','undefined',39),(11,'What is DBMS?','Database Management System','chapter_videos/What_is_DATABASE_MANAGEMENT_SYSTEM_or_DBMS__Intro_to_DBMS_720_x_1280.mp4','undefined',39),(12,'Introduction','Internet of things','chapter_videos/IoT__Internet_of_Things__What_is_IoT___How_IoT_Works__IoT_Explained_in_480_x_854.mp4','undefined',40),(13,'Introduction','Introduction to AIML','chapter_videos/What_Is_AI__Artificial_Intelligence__What_is_Artificial_Intelligence___480_x_854.mp4','undefined',41),(14,'Introduction','CIS','chapter_videos/What_is_Database__Database_Management_System_DBMS__Intro_to_DBMS_720_x_12_eYzjGk9.mp4','undefined',42);
/*!40000 ALTER TABLE `main_chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_course`
--

DROP TABLE IF EXISTS `main_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_course` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` longtext NOT NULL,
  `featured_img` varchar(100) DEFAULT NULL,
  `techs` longtext,
  `category_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_course_category_id_f8b052fb_fk_main_coursecategory_id` (`category_id`),
  KEY `main_course_teacher_id_f74be8b8_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_course_category_id_f8b052fb_fk_main_coursecategory_id` FOREIGN KEY (`category_id`) REFERENCES `main_coursecategory` (`id`),
  CONSTRAINT `main_course_teacher_id_f74be8b8_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_course`
--

LOCK TABLES `main_course` WRITE;
/*!40000 ALTER TABLE `main_course` DISABLE KEYS */;
INSERT INTO `main_course` VALUES (39,'DBMS','Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.','course_imgs/download_2_1.png','MYSQL, MONGODB',5,9),(40,'IOT','The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.','course_imgs/IOT.jpg','IOT, HARDWARE',4,10),(41,'AIML','Machine learning is an application of AI. It\'s the process of using mathematical models of data to help a computer learn without direct instruction. This enables a computer system to continue learning and improving on its own, based on experience.','course_imgs/AIML.jpeg','AI, ML',3,11),(42,'CIS','Cryptography ensures information is not altered while in storage or during transit between the sender and the intended recipient. For example, digital signatures can detect forgery or tampering in software distribution and financial transactions.','course_imgs/CIS_1.png','CIS',6,12);
/*!40000 ALTER TABLE `main_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_coursecategory`
--

DROP TABLE IF EXISTS `main_coursecategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_coursecategory` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `discription` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_coursecategory`
--

LOCK TABLES `main_coursecategory` WRITE;
/*!40000 ALTER TABLE `main_coursecategory` DISABLE KEYS */;
INSERT INTO `main_coursecategory` VALUES (3,'AIML','Machine learning is an application of AI. It\'s the process of using mathematical models of data to help a computer learn without direct instruction. This enables a computer system to continue learning and improving on its own, based on experience.'),(4,'IOT','The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.'),(5,'DBMS','Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.'),(6,'CIS','Cryptography ensures information is not altered while in storage or during transit between the sender and the intended recipient. For example, digital signatures can detect forgery or tampering in software distribution and financial transactions.');
/*!40000 ALTER TABLE `main_coursecategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_coursequiz`
--

DROP TABLE IF EXISTS `main_coursequiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_coursequiz` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `add_time` datetime(6) NOT NULL,
  `course_id` bigint NOT NULL,
  `quiz_id` bigint NOT NULL,
  `teacher_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `main_coursequiz_course_id_f7ce614b_fk_main_course_id` (`course_id`),
  KEY `main_coursequiz_quiz_id_8ab117ca_fk_main_quiz_id` (`quiz_id`),
  KEY `main_coursequiz_teacher_id_1fe22b9c_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_coursequiz_course_id_f7ce614b_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`),
  CONSTRAINT `main_coursequiz_quiz_id_8ab117ca_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`),
  CONSTRAINT `main_coursequiz_teacher_id_1fe22b9c_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_coursequiz`
--

LOCK TABLES `main_coursequiz` WRITE;
/*!40000 ALTER TABLE `main_coursequiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_coursequiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_courserating`
--

DROP TABLE IF EXISTS `main_courserating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_courserating` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `rating` bigint unsigned NOT NULL,
  `review` longtext,
  `review_time` datetime(6) NOT NULL,
  `course_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_courserating_course_id_c4cf9f54_fk_main_course_id` (`course_id`),
  KEY `main_courserating_student_id_67da56ba_fk_main_student_id` (`student_id`),
  CONSTRAINT `main_courserating_course_id_c4cf9f54_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`),
  CONSTRAINT `main_courserating_student_id_67da56ba_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_courserating_chk_1` CHECK ((`rating` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_courserating`
--

LOCK TABLES `main_courserating` WRITE;
/*!40000 ALTER TABLE `main_courserating` DISABLE KEYS */;
INSERT INTO `main_courserating` VALUES (10,4,'GOOD','2023-10-30 18:49:10.743847',39,5),(11,5,'GOOD','2023-10-30 18:49:46.939168',40,5),(12,2,'HNNN','2023-10-30 18:50:17.302016',41,5),(13,5,'GOOD','2023-10-30 18:50:36.729880',42,5),(14,4,'good','2024-01-31 17:05:13.942519',39,5),(15,3,'giddd','2024-01-31 17:13:21.830210',39,5);
/*!40000 ALTER TABLE `main_courserating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_notification`
--

DROP TABLE IF EXISTS `main_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_notification` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `notif_for` varchar(200) NOT NULL,
  `notif_created_time` datetime(6) NOT NULL,
  `notifread_status` tinyint(1) DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `teacher_id` bigint DEFAULT NULL,
  `notif_subject` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `main_notification_student_id_c6f12132_fk_main_student_id` (`student_id`),
  KEY `main_notification_teacher_id_78d8b8c7_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_notification_student_id_c6f12132_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_notification_teacher_id_78d8b8c7_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_notification`
--

LOCK TABLES `main_notification` WRITE;
/*!40000 ALTER TABLE `main_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_notification1`
--

DROP TABLE IF EXISTS `main_notification1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_notification1` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `notif_subject` varchar(200) DEFAULT NULL,
  `notif_for` varchar(200) NOT NULL,
  `notif_created_time` datetime(6) NOT NULL,
  `notifread_status` tinyint(1) DEFAULT NULL,
  `student_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_notification1_student_id_08f97461_fk_main_student_id` (`student_id`),
  KEY `main_notification1_teacher_id_1844aafd_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_notification1_student_id_08f97461_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_notification1_teacher_id_1844aafd_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_notification1`
--

LOCK TABLES `main_notification1` WRITE;
/*!40000 ALTER TABLE `main_notification1` DISABLE KEYS */;
INSERT INTO `main_notification1` VALUES (2,'assignment','student','2023-10-30 19:03:49.715699',1,5,10);
/*!40000 ALTER TABLE `main_notification1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_quiz`
--

DROP TABLE IF EXISTS `main_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_quiz` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `detail` longtext NOT NULL,
  `add_time` datetime(6) NOT NULL,
  `teacher_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `main_quiz_teacher_id_8901358e_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_quiz_teacher_id_8901358e_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_quiz`
--

LOCK TABLES `main_quiz` WRITE;
/*!40000 ALTER TABLE `main_quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_quizquestions`
--

DROP TABLE IF EXISTS `main_quizquestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_quizquestions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `questions` varchar(200) NOT NULL,
  `ans1` varchar(200) NOT NULL,
  `ans2` varchar(200) NOT NULL,
  `ans3` varchar(200) NOT NULL,
  `ans4` varchar(200) NOT NULL,
  `right_ans` varchar(200) NOT NULL,
  `quiz_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_quizquestions_quiz_id_bddb7bdd_fk_main_quiz_id` (`quiz_id`),
  CONSTRAINT `main_quizquestions_quiz_id_bddb7bdd_fk_main_quiz_id` FOREIGN KEY (`quiz_id`) REFERENCES `main_quiz` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_quizquestions`
--

LOCK TABLES `main_quizquestions` WRITE;
/*!40000 ALTER TABLE `main_quizquestions` DISABLE KEYS */;
/*!40000 ALTER TABLE `main_quizquestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_student`
--

DROP TABLE IF EXISTS `main_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_student` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `department` varchar(200) DEFAULT NULL,
  `division` longtext,
  `enrollment_no` longtext,
  `featured_img` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `rollno` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_student`
--

LOCK TABLES `main_student` WRITE;
/*!40000 ALTER TABLE `main_student` DISABLE KEYS */;
INSERT INTO `main_student` VALUES (5,'diptishgohane04@gmail.com','2213535','08261950281','CSE','CSF2','MITU21BTCS0001','teacher_imgs/Copy_of_Copy_of_passport_size_photo_V6gJOkv.jpeg','Diptish','Gohane','2213535'),(6,'diptishgohane@gmail.com','123456','08261950281','CSE','SY2','MITU21BTCS0007','teacher_imgs/TEACHER3_x6wU5th.jpeg','Diptish','Gohane','123456');
/*!40000 ALTER TABLE `main_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_studentassignment`
--

DROP TABLE IF EXISTS `main_studentassignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_studentassignment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `detail` longtext,
  `add_time` datetime(6) NOT NULL,
  `student_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  `student_status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `main_studentassignment_student_id_a4f06eb2_fk_main_student_id` (`student_id`),
  KEY `main_studentassignment_teacher_id_5d93f84b_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_studentassignment_student_id_a4f06eb2_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_studentassignment_teacher_id_5d93f84b_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_studentassignment`
--

LOCK TABLES `main_studentassignment` WRITE;
/*!40000 ALTER TABLE `main_studentassignment` DISABLE KEYS */;
INSERT INTO `main_studentassignment` VALUES (21,'WHAT IS IOT?','SEARCH IT ON INTERNET','2023-10-30 19:03:49.562204',5,10,1);
/*!40000 ALTER TABLE `main_studentassignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_studentcourseenrollment`
--

DROP TABLE IF EXISTS `main_studentcourseenrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_studentcourseenrollment` (
  `enrolled_time` datetime(6) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `course_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_studentcourseenrollmen_course_id_76942a8e_fk_main_course_id` (`course_id`),
  KEY `main_studentcourseen_student_id_bc2c5266_fk_main_stud` (`student_id`),
  CONSTRAINT `main_studentcourseen_student_id_bc2c5266_fk_main_stud` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_studentcourseenrollmen_course_id_76942a8e_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_studentcourseenrollment`
--

LOCK TABLES `main_studentcourseenrollment` WRITE;
/*!40000 ALTER TABLE `main_studentcourseenrollment` DISABLE KEYS */;
INSERT INTO `main_studentcourseenrollment` VALUES ('2023-10-30 18:49:35.932414',26,40,5),('2023-10-30 18:50:05.495718',27,41,5),('2023-10-30 18:50:29.141529',28,42,5),('2024-01-31 17:13:14.129957',31,39,5);
/*!40000 ALTER TABLE `main_studentcourseenrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_studentfavoritecourse`
--

DROP TABLE IF EXISTS `main_studentfavoritecourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_studentfavoritecourse` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL,
  `course_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_studentfavoritecourse_course_id_ab119fa4_fk_main_course_id` (`course_id`),
  KEY `main_studentfavorite_student_id_a028e3b6_fk_main_stud` (`student_id`),
  CONSTRAINT `main_studentfavorite_student_id_a028e3b6_fk_main_stud` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_studentfavoritecourse_course_id_ab119fa4_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_studentfavoritecourse`
--

LOCK TABLES `main_studentfavoritecourse` WRITE;
/*!40000 ALTER TABLE `main_studentfavoritecourse` DISABLE KEYS */;
INSERT INTO `main_studentfavoritecourse` VALUES (14,1,42,5),(17,1,39,5),(18,1,40,5);
/*!40000 ALTER TABLE `main_studentfavoritecourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_studymaterial`
--

DROP TABLE IF EXISTS `main_studymaterial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_studymaterial` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` longtext NOT NULL,
  `upload` varchar(100) DEFAULT NULL,
  `remarks` longtext,
  `course_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_studymaterial_course_id_985aedd5_fk_main_course_id` (`course_id`),
  CONSTRAINT `main_studymaterial_course_id_985aedd5_fk_main_course_id` FOREIGN KEY (`course_id`) REFERENCES `main_course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_studymaterial`
--

LOCK TABLES `main_studymaterial` WRITE;
/*!40000 ALTER TABLE `main_studymaterial` DISABLE KEYS */;
INSERT INTO `main_studymaterial` VALUES (6,'UNIT 1','CIS UNIT 1','study_materials/osunit3.pdf','UNIT 1',42),(7,'UNIT 2','CIS UNIT 2','',NULL,42),(8,'UNIT 3','CIS UNIT 3','study_materials/unit4dbms.pdf','CIS',42),(10,'UNIT 2','DBMS UNIT 2','study_materials/unit3iot.pdf','DBMS',39),(11,'UNIT 3','DBMS UNIT 3','study_materials/unit4dbms_FWoPHBQ.pdf','DBMS',39),(15,'UNIT 1','IOT UNIT 1','study_materials/unit3iot_r5HFlXd.pdf','IOT',40),(16,'UNIT 2','IOT UNIT 2','study_materials/unit4iot_kGhACIJ.pdf','IOT',40),(17,'UNIT 3','IOT UNIT 3','study_materials/1fee.pdf','IOT',40),(18,'unit 6','frfrfrf','study_materials/240888296823_1.pdf','giood',39);
/*!40000 ALTER TABLE `main_studymaterial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_teacher`
--

DROP TABLE IF EXISTS `main_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_teacher` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `qulification` varchar(200) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `address` longtext NOT NULL,
  `detail` longtext,
  `featured_img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_teacher`
--

LOCK TABLES `main_teacher` WRITE;
/*!40000 ALTER TABLE `main_teacher` DISABLE KEYS */;
INSERT INTO `main_teacher` VALUES (9,'Prof. Diptish','Gohane','diptishgohane04@gmail.com','2213535','Btech','8261950281','Loni kalbhor','As a Computer Science Engineer with a passion for progconstantly seeking new opportunities to expand my skills and make a meaningful contribution to the field. I am currently pursuing my B.Tech in Computer Science from MIT ADT University and have been actively involved in various technical projects and extracurricular activities.','teacher_imgs/pngtree-teachers-day-characters-png-image_6740168.png'),(10,'Prof. Harsh','Gupta','harshgupta@gmail.com','2213535','Btech','8261950281','Loni kalbhor','As a Computer Science Engineer with a passion for progconstantly seeking new opportunities to expand my skills and make a meaningful contribution to the field. I am currently pursuing my B.Tech in Computer Science from MIT ADT University and have been actively involved in various technical projects and extracurricular activities.','teacher_imgs/images.jpeg'),(11,'Prof. Adrija','Santra','adrijasantra@gmail.com','2213535','Btech','8261950281','Loni kalbhor','As a Computer Science Engineer with a passion for progconstantly seeking new opportunities to expand my skills and make a meaningful contribution to the field. I am currently pursuing my B.Tech in Computer Science from MIT ADT University and have been actively involved in various technical projects and extracurricular activities.','teacher_imgs/pngtree-pure-teacher-clip-art-png-image_2684296.jpg'),(12,'Prof. Pradhayum','Dhondi','pradhayumdhondi@gmail.com','2213535','Btech','8261950281','Loni kalbhor','As a Computer Science Engineer with a passion for progconstantly seeking new opportunities to expand my skills and make a meaningful contribution to the field. I am currently pursuing my B.Tech in Computer Science from MIT ADT University and have been actively involved in various technical projects and extracurricular activities.','teacher_imgs/images_1.jpeg');
/*!40000 ALTER TABLE `main_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_teacherstudentchat`
--

DROP TABLE IF EXISTS `main_teacherstudentchat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_teacherstudentchat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `msg_text` longtext NOT NULL,
  `msg_from` varchar(100) NOT NULL,
  `msg_time` datetime(6) NOT NULL,
  `student_id` bigint NOT NULL,
  `teacher_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `main_teacherstudentchat_student_id_b493dacb_fk_main_student_id` (`student_id`),
  KEY `main_teacherstudentchat_teacher_id_169115f9_fk_main_teacher_id` (`teacher_id`),
  CONSTRAINT `main_teacherstudentchat_student_id_b493dacb_fk_main_student_id` FOREIGN KEY (`student_id`) REFERENCES `main_student` (`id`),
  CONSTRAINT `main_teacherstudentchat_teacher_id_169115f9_fk_main_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `main_teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_teacherstudentchat`
--

LOCK TABLES `main_teacherstudentchat` WRITE;
/*!40000 ALTER TABLE `main_teacherstudentchat` DISABLE KEYS */;
INSERT INTO `main_teacherstudentchat` VALUES (1,'','teacher','2023-10-31 17:32:59.591231',5,9),(2,'hiiii','teacher','2023-10-31 18:12:34.072707',5,9),(3,'effe','teacher','2023-10-31 18:29:44.686619',5,9),(4,'hello','teacher','2023-10-31 20:00:38.879023',5,9),(5,'hbj','teacher','2023-10-31 20:20:08.773376',5,9),(6,'allll is here','teacher','2023-10-31 20:22:24.067282',5,9),(7,'hiii','teacher','2023-10-31 20:33:48.390622',5,9),(8,'byee','teacher','2023-10-31 20:34:55.884950',5,9),(9,'hiii diptish','student','2023-10-31 22:00:50.921950',5,9),(10,'hiii','student','2023-10-31 22:03:54.532118',5,9),(11,'ok','teacher','2023-10-31 22:05:52.395958',5,9),(12,'hiii','student','2023-10-31 22:11:04.829356',5,10),(13,'bye dip','teacher','2023-10-31 23:00:25.611369',5,9),(14,'hiii ','teacher','2023-11-02 06:40:41.057476',5,9),(15,'hii','student','2024-01-31 17:04:38.889207',5,10),(16,'good bye','student','2024-01-31 17:04:46.601597',5,10),(17,'hii','student','2024-01-31 17:14:12.002759',5,9);
/*!40000 ALTER TABLE `main_teacherstudentchat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 23:45:21
