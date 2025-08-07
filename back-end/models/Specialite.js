const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define("Specialite", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: "specialite",      
  freezeTableName: true         
});

module.exports = Specialite;