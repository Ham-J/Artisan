const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Artisan = sequelize.define("artisan", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nom: DataTypes.STRING,
  note: DataTypes.FLOAT,
  ville: DataTypes.STRING,
  a_propos: DataTypes.TEXT,
  email: DataTypes.STRING,
  site_web: DataTypes.STRING,
  top: DataTypes.BOOLEAN,
  specialite_id: DataTypes.INTEGER,
}, {
  timestamps: false,        
});

module.exports = Artisan;

