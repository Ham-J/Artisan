const { Categorie } = require("../models");

exports.getAllCategories = async () => {
  try {
    console.log(" Service getAllCategories appelé");

    const categories = await Categorie.findAll({
      attributes: ["id", "nom"],
      order: [["nom", "ASC"]],
    });

    if (!categories || categories.length === 0) {
      console.warn(" Aucune catégorie trouvée dans la base de données.");
      return [];
    }

    console.log(` ${categories.length} catégories récupérées`);
    return categories;

  } catch (error) {
    console.error(" Erreur dans getAllCategories (service) :", error.message);
    throw new Error("Impossible de récupérer les catégories");
  }
};
