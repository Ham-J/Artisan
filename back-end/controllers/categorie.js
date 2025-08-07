const categorieService = require("../services/categorie");

exports.getAllCategories = async (req, res) => {
  try {
    console.log("Route GET /categories appelée");
    
    const categories = await categorieService.getAllCategories();
    
    console.log("Categories récupérées :", categories.length);
    res.json(categories);
  } catch (error) {
    console.error("Erreur dans getAllCategories :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
