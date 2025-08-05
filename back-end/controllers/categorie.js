const categorieService = require("../services/categorie");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categorieService.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
