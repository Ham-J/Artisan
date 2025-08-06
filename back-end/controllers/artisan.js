const artisanService = require("../services/artisan");


exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getAllArtisans();
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getArtisansByCategorie = async (req, res) => {
  try {
    const { nom } = req.query;
    const artisans = await artisanService.getArtisansByCategorie(nom);
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await artisanService.getTopArtisans();
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.searchArtisans = async (req, res) => {
  let { search } = req.query;


  search = search?.trim();

  if (!search) {
    return res.status(400).json({ message: "Le paramètre 'search' est requis" });
  }

  try {
    const artisans = await artisanService.searchArtisansByName(search);
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await artisanService.getArtisanById(req.params.id);

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" });
    }

    res.json(artisan);
  } catch (error) {
    console.error( error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
