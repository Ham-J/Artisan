const sequelize = require("./config/db");   
require("dotenv").config();
const app = require("./app"); 


sequelize.authenticate()
  .then(() => console.log(' Connecté à la base MySQL Railway'))
  .catch(err => console.error(' Erreur de connexion à la DB :', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
