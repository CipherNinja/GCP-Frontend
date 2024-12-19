-- server/migrations/init.sql

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS `gripchain`;

-- Use the database
USE `gripchain`;

-- Create the FAQ table
CREATE TABLE IF NOT EXISTS `FAQs` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,           
    `query` TEXT NOT NULL,        
    `answer` TEXT,                                    
    `visibility` BOOLEAN DEFAULT FALSE,          
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the Contact Us table
CREATE TABLE IF NOT EXISTS `contactus` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,           
    `name` VARCHAR(255) NOT NULL,                  
    `email` VARCHAR(255) NOT NULL,                 
    `phone` VARCHAR(15) NOT NULL,                  
    `country` VARCHAR(100) NOT NULL,               
    `message` TEXT NOT NULL,                        
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the Product table
CREATE TABLE IF NOT EXISTS `Products` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,                  
    `name` VARCHAR(255) NOT NULL,                         
    `title` TEXT NOT NULL,                        
    `stock` VARCHAR(20) NOT NULL,                        
    `mrp` VARCHAR(20) NOT NULL,                          
    `original_price` VARCHAR(20) NOT NULL,               
    `categories` JSON NOT NULL,                           
    `images` JSON NOT NULL,                                        
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);