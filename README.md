 **Front-end** (React sur GitHub Pages) :  
  [https://ham-j.github.io/Artisan](https://ham-j.github.io/Artisan)

**Back-end** (API REST sur Render) :  
   [https://artisan-backend-wcsv.onrender.com](https://artisan-backend-wcsv.onrender.com)

git clone https://github.com/Ham-J/Artisan.git
cd Artisan

 Lancer le back-end

cd back-end
npm install
cp .env.example .env     //configuration tes variables (DB_HOST, etc.)
npm start  

Lancer le front-end

cd front-end
npm install
npm start   

Front-end : React, Axios, Bootstrap
Back-end : Express, Sequelize, MySQL
Hébergement : Render (API) + GitHub Pages (React)
