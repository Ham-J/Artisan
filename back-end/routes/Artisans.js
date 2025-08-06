const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisan');

router.get("/", artisanController.getAllArtisans);
router.get("/byCategorie", artisanController.getArtisansByCategorie);
router.get('/top',artisanController.getTopArtisans);
router.get("/search", artisanController.searchArtisans);
router.get("/:id", artisanController.getArtisanById);

module.exports = router;