const { Artisan, Specialite, Categorie } = require("../models");
const { Op ,fn,col, where} = require("sequelize");

// GET ALL
exports.getAllArtisans = async () => {
  try {
    return await Artisan.findAll({
      include: {
        model: Specialite,
        attributes: ["nom"],
        include: {
          model: Categorie,
          attributes: ["nom"],
        },
      },
    });
  } catch (error) {
    console.error("Erreur dans getAllArtisans :", error);
    throw error;
  }
};

// GET grâce à la catégorie
exports.getArtisansByCategorie = async (nomCategorie) => {
  try {
    return await Artisan.findAll({
      include: {
        model: Specialite,
        required: true,
        include: {
          model: Categorie,
          required: true,
          where: where(
            fn("LOWER", col("Specialite->Categorie.nom")),
            nomCategorie.toLowerCase()
          ),
        },
      },
    });
  } catch (error) {
    console.error("Erreur dans getArtisansByCategorie :", error);
    throw error;
  }
};


// GET TOP 3
exports.getTopArtisans = async () => {
  try {
    return await Artisan.findAll({
      where: { top: true },
      include: {
        model: Specialite,
        attributes: ["nom"],
        include: {
          model: Categorie,
          attributes: ["nom"],
        },
      },
      limit: 3,
    });
  } catch (error) {
    console.error("Erreur dans getTopArtisans :", error);
    throw error;
  }
};

// SEARCH BY NAME
exports.searchArtisansByName = async (search) => {
  try {
    return await Artisan.findAll({
      where: {
        nom: {
          [Op.like]: `%${search}%`,
        },
      },
      include: {
        model: Specialite,
        attributes: ["nom"],
        include: {
          model: Categorie,
          attributes: ["nom"],
        },
      },
    });
  } catch (error) {
    console.error("Erreur dans searchArtisansByName :", error);
    throw error;
  }
};

// GET BY ID
exports.getArtisanById = async (id) => {
  try {
    return await Artisan.findByPk(id, {
      include: {
        model: Specialite,
        attributes: ["nom"],
        include: {
          model: Categorie,
          attributes: ["nom"],
        },
      },
    });
  } catch (error) {
    console.error("Erreur dans getArtisanById :", error);
    throw error;
  }
};
