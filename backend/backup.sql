-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: database
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'PT. Jaya Bakti','jayabakti@gmail.com','Pekalongan','$2b$10$1CfTM3lbCq/1AEFzkHqVVeSTl2h4pf1.hxnl0ySnkLnkOwvkOHKUG','customer','2024-04-02 18:29:45.738','2024-04-02 18:29:45.738'),(2,'CV. Merpati Tunggal','merpatitunggal@gmail.com','Pekalongan','$2b$10$Yepy5MO4YgBxoBKjDnWx4eCr8TkpM1ZyVth/MXNVsneP4HQLW2gvi','customer','2024-04-02 18:30:37.677','2024-04-02 18:30:37.677'),(3,'CV. Bangkit','bangkit@gmail.com','Pekalongan','$2b$10$6Zq8uZi0oijXIVB1xvZnoedAVy5K67mE/HTI40aHd4D3Cs2u0dmmm','customer','2024-04-02 18:30:57.431','2024-04-02 18:30:57.431'),(4,'PT. Petrofisika','petrofisika@gmail.com','Pekalongan','$2b$10$NQ1t5d4gk.FutuKcM1lQNu52gHTCtO2XkZgLJfp.dHb.HvYRn4d5C','customer','2024-04-02 18:31:17.557','2024-04-02 18:31:17.557'),(5,'Bpk. Prayitno','prayitno@gmail.com','Pekalongan','$2b$10$CXzZRH99pDjBxS/vE8GTuu6gATHGmk.6.vWQxvUchHGSY1He7UCbS','customer','2024-04-02 18:31:35.811','2024-04-02 18:31:35.811'),(6,'CV. Praktikno Lancar Jaya Nusantara','paktikunoljn@gmail.com','Pekalongan','$2b$10$wOpwe4qfLh7J40Tk86zJse9bgUfr4v737.imJAI7/WgZs42o/O2PC','customer','2024-04-02 18:32:13.706','2024-04-02 18:32:13.706'),(7,'PT. Barokah Tunggal Satu','barokahtunggalsatu@gmail.com','Pekalongan','$2b$10$qWtDae2XN9/rV2JDSPILAeoHSF4cDPhJ7QzrbYholYempbND4LOQO','customer','2024-04-02 18:32:50.571','2024-04-02 18:32:50.571'),(8,'bambang','bambang@gmail.com','Pekalongan','$2b$10$t6zHCj2JbCSXG4a/4/69jOxl19Myz0r3.B9.TVMTFE6OmA6R6bwii','customer','2024-04-02 18:33:09.362','2024-04-02 18:33:09.362'),(9,'admin','admin@gmail.com','Pekalongan','$2b$10$WSYYYhlEMdjDzJ4KhC619eS77bUZdtlsGXw4lymoNyiJep27uVjwi','superadmin','2024-04-02 18:33:20.231','2024-04-02 18:33:20.231');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 18:36:20
