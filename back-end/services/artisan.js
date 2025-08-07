const { Artisan, Specialite, Categorie } = require("../models");
const { Op } = require("sequelize");

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

// GET BY CATEGORIE
exports.getArtisansByCategorie = async (nomCategorie) => {
  try {
    return await Artisan.findAll({
      include: {
        model: Specialite,
        include: {
          model: Categorie,
          where: { nom: nomCategorie },
          attributes: [],
        },
        attributes: ["nom"],
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
