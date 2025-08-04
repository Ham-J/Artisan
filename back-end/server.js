const sequelize = require("./config/db");   
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => {
    console.log("MySQL connected");
    app.listen(PORT, () => {
      console.log(` Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Connexion error :", err));
