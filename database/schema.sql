/*CREATE DATABASE trouve_ton_artisan;
USE trouve_ton_artisan;*/

-- Table des catégories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

-- Table des spécialités
CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Table des artisans
CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    note DECIMAL(2,1),
    ville VARCHAR(100),
    a_propos TEXT,
    email VARCHAR(150),
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    specialite_id INT,
    FOREIGN KEY (specialite_id) REFERENCES specialites(id) ON DELETE CASCADE
);
