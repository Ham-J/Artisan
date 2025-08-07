const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define("Specialite", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'specialites', 
  timestamps: true
});

module.exports = Specialite;
