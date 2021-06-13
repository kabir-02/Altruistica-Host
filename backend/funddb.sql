-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2021 at 04:55 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funddb`
--

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
-- Indexes for dumped tables
--

--
-- Indexes for table `fundraisers`
--
ALTER TABLE `fundraisers`
  ADD PRIMARY KEY (`fr_id`),
  ADD KEY `fr-uid` (`fr-uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fundraisers`
--
ALTER TABLE `fundraisers`
  MODIFY `fr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fundraisers`
--
ALTER TABLE `fundraisers`
  ADD CONSTRAINT `fundraisers_ibfk_1` FOREIGN KEY (`fr-uid`) REFERENCES `user_info` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
