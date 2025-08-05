const express = require('express');
const cors = require("cors");
const artisanRoutes = require('./routes/Artisans');
const categorieRoutes = require('./routes/Categorie');
const app = express();

app.use(cors());
app.use(express.json());

require("./models"); 

app.use("/artisans", artisanRoutes);
app.use('/categories',categorieRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route non trouvée (404)" });
});


module.exports = app;
