const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define("Specialite", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Specialite;
