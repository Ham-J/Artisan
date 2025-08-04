const Artisan = require("./Artisan");
const Specialite = require("./Specialite");
const Categorie = require("./Categorie");

Categorie.hasMany(Specialite, { foreignKey: "categorie_id" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id" });

Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });

module.exports = {
  Artisan,
  Specialite,
  Categorie
};
