const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Artisan = sequelize.define("Artisan", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 0,
  },
  ville: {
    type: DataTypes.STRING,
  },
  a_propos: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING,
  },
  site_web: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Artisan;
