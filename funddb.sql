-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 07:23 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29
CREATE DATABASE funddb;
USE funddb;
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET
  time_zone = "+00:00";
  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;
--
  -- Database: `funddb`
  --
  -- --------------------------------------------------------
  --
  -- Table structure for table `donations`
  --
  CREATE TABLE `donations` (
    `d_id` int(11) NOT NULL,
    `d_frid` int(11) NOT NULL,
    `d_amount` int(20) NOT NULL,
    `d_date` datetime NOT NULL,
    `donor_uid` int(11) NOT NULL,
    `d_anon` tinyint(1) NOT NULL DEFAULT 0
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
  -- Dumping data for table `donations`
  --
INSERT INTO
  `donations` (
    `d_id`,
    `d_frid`,
    `d_amount`,
    `d_date`,
    `donor_uid`,
    `d_anon`
  )
VALUES
  (1000, 100, 100, '2021-05-21 00:00:00', 1, 0),
  (1001, 101, 200, '2021-05-21 00:00:00', 2, 0);
-- --------------------------------------------------------
  --
  -- Table structure for table `fundraisers`
  --
  CREATE TABLE `fundraisers` (
  `fr_id` int(11) NOT NULL,
  `fr_title` text NOT NULL,
  `fr_desc` text NOT NULL,
  `fr_category` enum('1','2','3','4','5','6','7') DEFAULT NULL,
  `fr_class` enum('Fundraising','Crowdfunding','Crowdsourcing','Auctioning','Covid19') NOT NULL,
  `fr_type` enum('Fixed','Flexible','','') NOT NULL DEFAULT 'Flexible',
  `fr-uid` int(11) NOT NULL,
  `fr_gentime` datetime NOT NULL DEFAULT current_timestamp(),
  `fr_target` int(20) NOT NULL,
  `fr_deadline` datetime NOT NULL,
  `fr_status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fundraisers`
--

INSERT INTO `fundraisers` (`fr_id`, `fr_title`, `fr_desc`, `fr_category`, `fr_class`, `fr_type`, `fr-uid`, `fr_gentime`, `fr_target`, `fr_deadline`, `fr_status`) VALUES
(100, 'Fundraiser for education of 6 kids.', 'I am located in ahmedabad, and found 6 kids as beggars but i want them to get educated and so raised this crowndfunding .Pls help.', '', 'Fundraising', 'Flexible', 1, '2021-05-22 15:00:08', 100000, '2021-06-30 17:47:58', 0),
(101, 'Funds for a startup.', 'I want to open my own IT firm for which i need money and your support. Pls help.', '', 'Fundraising', 'Flexible', 2, '2021-05-22 15:00:08', 20000, '2021-05-31 17:48:17', 0);

--
  --
  -- Table structure for table `user_info`
  --
  CREATE TABLE `user_info` (
    `user_id` int(11) NOT NULL,
    `Name` varchar(100) NOT NULL,
    `City` varchar(100) NOT NULL,
    `State` varchar(20) NOT NULL,
    `Pin_code` int(10) NOT NULL,
    `Email` varchar(100) NOT NULL,
    `Create_pw` text NOT NULL,
    `Confirm_pw` text NOT NULL,
    `Mobile_no` text NOT NULL,
    `Tamt_donated` int(10) NOT NULL DEFAULT 0,
    `Tamt_gained` int(10) NOT NULL DEFAULT 0
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
CREATE TABLE `initial_signup` (
    `email` varchar(100) NOT NULL,
    `Create_pw` text NOT NULL,
    `Confirm_pw` text NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
--
  -- Dumping data for table `user_info`
  --
INSERT INTO
  `user_info` (
    `user_id`,
    `Name`,
    `City`,
    `State`,
    `Pin_code`,
    `Email`,
    `Create_pw`,
    `Confirm_pw`,
    `Mobile_no`,
    `Tamt_donated`,
    `Tamt_gained`
  )
VALUES
  (
    1,
    'Rahul',
    'Ahmedabad',
    'Gujarat',
    382210,
    'rahunair@gmail.com',
    'rahul@123',
    'rahul@123',
    '7454918899',
    0,
    0
  ),
  (
    2,
    'Erina',
    'Kolkata',
    'West Bengal',
    700036,
    'erina@gmail.com',
    'erina@123',
    'erina@123',
    '7454918897',
    0,
    0
  );
--
  -- Indexes for dumped tables
  --
  --
  -- Indexes for table `donations`
  --
ALTER TABLE
  `donations`
ADD
  PRIMARY KEY (`d_id`),
ADD
  KEY `donor_uid` (`donor_uid`),
ADD
  KEY `d_frid` (`d_frid`);
--
  -- Indexes for table `fundraisers`
  --
ALTER TABLE
  `fundraisers`
ADD
  PRIMARY KEY (`fr_id`),
ADD
  KEY `fr-uid` (`fr-uid`);
--
  -- Indexes for table `user_info`
  --
ALTER TABLE
  `user_info`
ADD
  PRIMARY KEY (`user_id`);
--
  -- AUTO_INCREMENT for dumped tables
  --
  --
  -- AUTO_INCREMENT for table `donations`
  --
ALTER TABLE
  `donations`
MODIFY
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 1003;
--
  -- AUTO_INCREMENT for table `fundraisers`
  --
ALTER TABLE
  `fundraisers`
MODIFY
  `fr_id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 102;
--
  -- AUTO_INCREMENT for table `user_info`
  --
ALTER TABLE
  `user_info`
MODIFY
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 4;
--
  -- Constraints for dumped tables
  --
  --
  -- Constraints for table `donations`
  --
ALTER TABLE
  `donations`
ADD
  CONSTRAINT `donations_ibfk_1` FOREIGN KEY (`donor_uid`) REFERENCES `user_info` (`user_id`),
ADD
  CONSTRAINT `donations_ibfk_2` FOREIGN KEY (`d_frid`) REFERENCES `fundraisers` (`fr_id`);
--
  -- Constraints for table `fundraisers`
  --
ALTER TABLE
  `fundraisers`
ADD
  CONSTRAINT `fundraisers_ibfk_1` FOREIGN KEY (`fr-uid`) REFERENCES `user_info` (`user_id`);
COMMIT;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;