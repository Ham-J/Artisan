const { Artisan, Specialite, Categorie } = require("../models");
const { Op } = require("sequelize");

exports.getAllArtisans = async () => {
  try {
    console.log("getAllArtisans appelé");
    return await Artisan.findAll({
      include: {
        model: Specialite,
        attributes: ["nom"],
      },
    });
  } catch (error) {
    console.error("Erreur dans getAllArtisans :", error);
    throw error;
  }
};


exports.getArtisansByCategorie = async (nomCategorie) => {
  return Artisan.findAll({
    include: {
      model: Specialite,
      include: {
        model: Categorie,
        where: { nom: nomCategorie }
      }
    }
  });
};

exports.getTopArtisans = async () => {
  try {
    console.log("getTopArtisans appelé");
    return await Artisan.findAll({
      where: { top: true },
      include: {
        model: Specialite,
        attributes: ["nom"],
      },
      limit: 3,
    });
  } catch (error) {
    console.error("Erreur dans getTopArtisans :", error);
    throw error;
  }
};

exports.searchArtisansByName = async (search) => {
  try {
    console.log("searchArtisansByName appelé avec :", search);
    return await Artisan.findAll({
      where: {
        nom: {
          [Op.like]: `%${search}%`,
        },
      },
      include: {
        model: Specialite,
        attributes: ["nom"],
      },
    });
  } catch (error) {
    console.error("Erreur dans searchArtisansByName :", error);
    throw error;
  }
};

exports.getArtisanById = async (id) => {
  try {
    console.log("getArtisanById appelé avec id :", id);
    return await Artisan.findByPk(id, {
      include: {
        model: Specialite,
        attributes: ["nom"],
      },
    });
  } catch (error) {
    console.error("Erreur dans getArtisanById :", error);
    throw error;
  }
};
