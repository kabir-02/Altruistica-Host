-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 02, 2021 at 07:07 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
CREATE TABLE IF NOT EXISTS `donations` (
  `d_id` int(11) NOT NULL,
  `d_frid` int(11) NOT NULL,
  `d_amount` int(20) NOT NULL,
  `d_date` datetime NOT NULL,
  `donor_uid` int(11) NOT NULL,
  `d_anon` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`d_id`, `d_frid`, `d_amount`, `d_date`, `donor_uid`, `d_anon`) VALUES
(1000, 100, 100, '2021-05-21 00:00:00', 1, 0),
(1001, 101, 200, '2021-05-21 00:00:00', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fundraisers`
--

DROP TABLE IF EXISTS `fundraisers`;
CREATE TABLE IF NOT EXISTS `fundraisers` (
  `fr_id` int(11) NOT NULL,
  `fr_title` text NOT NULL,
  `fr_desc` text NOT NULL,
  `fr_category` enum('1','2','3','4','5','6','7','8') DEFAULT NULL,
  `fr_class` enum('Fundraising','Crowdfunding','Crowdsourcing','Covid19','Organisation') NOT NULL,
  `fr_type` enum('Fixed','Flexible') NOT NULL DEFAULT 'Flexible',
  `fr_uid` int(11) NOT NULL,
  `fr_gentime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fr_target` int(20) NOT NULL DEFAULT '0',
  `fr_deadline` datetime NOT NULL,
  `fr_status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fundraisers`
--

INSERT INTO `fundraisers` (`fr_id`, `fr_title`, `fr_desc`, `fr_category`, `fr_class`, `fr_type`, `fr_uid`, `fr_gentime`, `fr_target`, `fr_deadline`, `fr_status`) VALUES
(100, 'Fundraiser for education of kids.', 'I am located in ahmedabad, and found 6 kids as beggars but i want them to get educated and so raised this crowndfunding .Pls help.', '2', 'Fundraising', 'Flexible', 1, '2021-05-22 15:00:08', 100000, '2021-06-30 17:47:58', 1),
(101, 'Need financial support for a startup.', 'I want to open my own IT firm for which i need money and your support. Pls help.', '1', 'Crowdfunding', 'Flexible', 2, '2021-05-22 15:00:08', 20000, '2021-05-31 17:48:17', 0),
(102, 'Wife Fears She Will Lose The Father Of Their 2-Year-Old Daughter To Brain Haemorrhage. Please Help.', 'On 24 February 2020, Rohit suddenly collapsed and was rushed to the hospital. The doctor told his wife that he suffered from brain haemorrhage because of which he will have to be admitted to the hospital. He also told her that Rohit’s condition was critical and that he will have to stay in the hospital for a long time for treatment & recovery.\r\n\r\nRohit is the sole earner of his family and unfortunately, he cannot afford to pay for his own treatment.', '1', 'Fundraising', 'Flexible', 3, '2021-05-10 15:38:01', 800000, '2021-06-30 15:38:01', 0),
(103, 'Umeed Ke Sur – Help Himalayas Breathe #TogetherWeCan', 'The mountains are calling all of us for its support. Uttarakhand, being the 2nd state with the highest rate of Covid mortality has innumerable survivors who have lost their means of livelihood. We need to comfort them with our little contribution. This will go a long way in building the healthcare structure in the rural region.', '3', 'Fundraising', 'Flexible', 4, '2021-06-01 15:38:01', 10000000, '2021-07-31 15:38:01', 0),
(104, 'Help NIT Warangal Make It To IGEM 2021', 'We are a group of Nineteen highly motivated students who have come together to make a difference! We plan to put our diverse backgrounds, experiences and disciplines together to improve the livelihood of a community i.e., 60 lakh cotton farmers in India.', '4', 'Crowdfunding', 'Flexible', 5, '2021-02-01 15:42:29', 200000, '2021-04-30 15:42:29', 0),
(105, 'Help Students of Delhi Government School to meet their needs .', 'They lack resources and can be provided with anything that will help them. You are open to donate books, stationaries, bags , clothes , etc. Just come up and contact us for all their blessings.', '2', 'Crowdsourcing', 'Flexible', 6, '2021-03-02 15:45:14', 0, '2021-06-30 15:45:14', 0),
(106, 'Help Us To Plant 1 Trillion Tree Worldwide', 'The best time to plant trees was yesterday, the next best time is now!\r\nTrees have a massive part to play in the fight against climate change…We are running awareness campaign through social media platforms about Climate Change and Global Warming with our Page \"We Don\'t Deserve This Planet\"\r\nhttps://www.facebook.com/WeDontDeserveEarth/\r\nPlanet warriors need your support.', '3', 'Organisation', 'Flexible', 7, '2021-04-01 16:32:31', 0, '2021-06-30 16:32:31', 0),
(107, 'Help Us distribute Masks in Rural regions of Maharashtra.', 'Our NGO ( Sewa-Dani ) want to distribute masks to each and every corner of Maharashtra and for this we need your support. You can help us in any way you want. You can send us directly masks at the given address or you can donate funds to support Sewa-Dani.', '5', 'Organisation', 'Flexible', 1, '2021-06-26 16:36:24', 0, '2021-08-31 16:32:31', 0),
(108, 'SUPPORT AKSHAYA PATRA\'S COVID-19 RELIEF SERVICE', 'As the COVID-19 crisis continues to loom over us, The Government of India has taken a strict combat measure by directing a lockdown of the entire nation. At this great hour of need, The Akshaya Patra Foundation, in close coordination with State Governments & District Administration, has stepped in to provide relief by providing food to thousands of people across the country.', '4', 'Covid19', 'Flexible', 2, '2021-06-26 16:39:05', 200000, '2021-09-30 16:36:44', 0),
(111, 'Immunise rural India against Coronavirus', 'The second wave of COVID-19 hit rural India hard. In May, 53% of all new cases were being reported from the country’s hinterlands and accounted for every second death from the virus. The only option to put an end to the pandemic is to vaccinate all eligible citizens. While in cities there is awareness and availability of vaccines, in our rural communities the reality is very different.GiveIndia will partner with state governments and local bodies for training of nurses, paramedics, ASHA workers, and community health workers. We will help bridge the digital divide and facilitate last mile delivery in rural areas especially in aspirational districts.', '1', 'Covid19', 'Flexible', 3, '2021-06-14 16:43:59', 1000000, '2021-10-31 16:43:59', 0),
(112, 'Mission Oxygen- Helping Hospitals Save Lives', 'India has witnessed an unprecedented second wave of the Covid-19 pandemic in the last few weeks. The pandemic has claimed over 200,000 lives since the beginning, and the current active caseloads are over 3.5 Million. An estimated 700,000 people are currently in dire need of hospitalisation with oxygen including ICUs. \r\nThere are 3 key areas identified by the team at #missionoxygen:\r\n\r\nImmediate Need: 10L/Min Oxygen Concentrators at healthcare facilities to cater to moderate cases of covid-19\r\nHFNC (Hi Flow Nasal Canulas), and BiPAP machines from critical care as life-saving devices\r\nCaptive Oxygen Generation Plants in Tier-II cities to make hospitals self-sufficient when it comes to Oxygen supplies and doesn\'t run out of Oxygen during peak needs.', '1', 'Covid19', 'Flexible', 4, '2021-03-01 16:43:59', 200000, '2021-11-30 16:43:59', 0),
(113, 'Fundraiser For Suicide Prevention Documentary In India\r\n', 'In August 2020, while researching for our new video to be put out on World Suicide Prevention Day, we started interviewing Suicide Prevention Helpline volunteers, which made us realize that this subject requires a lot more than a few interviews and surface research.We thus urge you to be a part of our cause and make a contribution, however little. Your kindness will not be in vain; there is no measure of how many lives you could touch with your small gesture. While Ubuntu gears up to give flight to our efforts, we hope you will be there to give us wings.', '5', 'Organisation', 'Flexible', 5, '2021-06-01 16:48:50', 0, '2021-06-30 16:48:50', 0),
(114, 'Resoource and Fund collection for college farewell event.', 'We the students of IIT Delhi, are planning to give a fantastic farewell to our seniors and this cant be done without you all. If possible pls help us with decoratives, cash , ideas, stalls ,etc. We will be really happy if you help us in any of the way possible.', '6', 'Crowdsourcing', 'Flexible', 6, '2021-06-26 16:54:00', 0, '2021-09-24 16:51:54', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
CREATE TABLE IF NOT EXISTS `user_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `State` varchar(20) NOT NULL,
  `Country` varchar(12) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Create_pw` text NOT NULL,
  `Confirm_pw` text NOT NULL,
  `Mobile_no` text NOT NULL,
  `Tamt_donated` int(10) NOT NULL DEFAULT '0',
  `Tamt_gained` int(10) NOT NULL DEFAULT '0',
  `SupportStatus` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `Name`, `City`, `State`, `Country`, `Email`, `Create_pw`, `Confirm_pw`, `Mobile_no`, `Tamt_donated`, `Tamt_gained`, `SupportStatus`) VALUES
(1, 'Rahul', 'Ahmedabad', 'Gujarat', 'India', 'rahunair@gmail.com', 'rahul@123', 'rahul@123', '7454918899', 0, 0, 0),
(2, 'Erina', 'Kolkata', 'West Bengal', 'India', 'erina@gmail.com', 'erina@123', 'erina@123', '7454918897', 0, 0, 0),
(3, 'Anna', 'Mapusa', 'Goa', 'India', 'vritikan@gmail.com', 'WOHOO', 'WOHOO', '92323134213', 10, 0, 1),
(4, 'Sana', 'Mumbai', 'Maharashtra', 'India', 'sanasathi@gmail.com', 'sanasathi', 'sanasathi', '9423984242', 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
