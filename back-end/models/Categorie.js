const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Categorie = sequelize.define("Categorie", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: "categories",       
  freezeTableName: true         
});

module.exports = Categorie;

