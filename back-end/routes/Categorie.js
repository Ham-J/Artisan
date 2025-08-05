const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorie');

router.get("/", categorieController.getAllCategories);

module.exports = router;