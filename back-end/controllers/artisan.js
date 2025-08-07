const artisanService = require("../services/artisan");

// GET all artisans
exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getAllArtisans();
    res.status(200).json(artisans);
  } catch (error) {
    console.error(" Erreur dans getAllArtisans :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des artisans" });
  }
};

// GET artisans par catégorie
exports.getArtisansByCategorie = async (req, res) => {
  try {
    const { nom } = req.query;

    if (!nom) {
      return res.status(400).json({ message: "Le nom de la catégorie est requis dans la query" });
    }

    console.log("Nom de catégorie reçu :", nom);

    const artisans = await artisanService.getArtisansByCategorie(nom);

    res.json(artisans);
  } catch (error) {
    console.error("Erreur dans getArtisansByCategorie :", error);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des artisans par catégorie" });
  }
};

// GET top artisans
exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTopArtisans();
    res.status(200).json(artisans);
  } catch (error) {
    console.error(" Erreur dans getTopArtisans :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des top artisans" });
  }
};

// SEARCH artisans by name
exports.searchArtisans = async (req, res) => {
  const { search } = req.query;

  if (!search?.trim()) {
    return res.status(400).json({ message: "Le paramètre 'search' est requis" });
  }

  try {
    const artisans = await artisanService.searchArtisansByName(search.trim());
    res.status(200).json(artisans);
  } catch (error) {
    console.error(" Erreur dans searchArtisans :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la recherche d'artisans" });
  }
};

// GET artisan by ID
exports.getArtisanById = async (req, res) => {
  const id = req.params.id;

  try {
    const artisan = await artisanService.getArtisanById(id);

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" });
    }

    res.status(200).json(artisan);
  } catch (error) {
    console.error(" Erreur dans getArtisanById :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la récupération de l'artisan" });
  }
};
