const { Categorie } = require("../models");

exports.getAllCategories = async () => {
  try {
    console.log("getAllCategories appelé");

    const categories = await Categorie.findAll({
      attributes: ["id", "nom"],
      order: [["nom", "ASC"]],
    });

    console.log("Nombre de catégories récupérées :", categories.length);
    return categories;

  } catch (error) {
    console.error("Erreur dans getAllCategories :", error);
    throw error;
  }
};
