const { Categorie } = require("../models");

exports.getAllCategories = async () => {
  return await Categorie.findAll({
    attributes: ["id", "nom"],
    order: [["nom", "ASC"]]
  });
};
