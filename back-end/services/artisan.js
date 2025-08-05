const { Artisan, Specialite } = require("../models");
const { Op } = require("sequelize");

exports.getAllArtisans = async () => {
  return await Artisan.findAll({
    include: {
      model: Specialite,
      attributes: ["nom"]
    }
  });
};

exports.getTopArtisans = async () => {
  return await Artisan.findAll({
    where: { top: true },
    include: {
      model: Specialite,
      attributes: ["nom"]
    },
    limit: 3
  });
};


exports.searchArtisansByName = async (search) => {
  return await Artisan.findAll({
    where: {
      nom: {
        [Op.like]: `%${search}%`
      }
    },
    include: {
      model: Specialite,
      attributes: ["nom"]
    }
  });
};


exports.getArtisanById = async (id) => {
  return await Artisan.findByPk(id, {
    include: {
      model: Specialite,
      attributes: ["nom"]
    }
  });
};