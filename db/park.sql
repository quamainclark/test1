-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- Host: mysql
-- Server version: 5.7.26
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `park`
--

CREATE TABLE `park` (
  `id` int(255) NOT NULL,
  `parkData` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park`
--

INSERT INTO `park` (`id`, `parkData`) VALUES ('1', '[[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false],[false,false,false,false,false,false,false]]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `park`
--
ALTER TABLE `park`
  ADD PRIMARY KEY (`id`);

COMMIT;