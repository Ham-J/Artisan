const categorieService = require("../services/categorie");

exports.getAllCategories = async (req, res) => {
  try {
    console.log(" Route GET /categories appelée");

    const categories = await categorieService.getAllCategories();

    if (!categories || categories.length === 0) {
      console.warn("Aucune catégorie trouvée");
      return res.status(404).json({ message: "Aucune catégorie trouvée" });
    }

    console.log(`${categories.length} catégories récupérées`);
    res.status(200).json(categories);

  } catch (error) {
    console.error(" Erreur dans getAllCategories :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des catégories" });
  }
};

