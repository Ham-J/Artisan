import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/artisans/top")
      .then((res) => setTopArtisans(res.data))
      .catch((err) => console.error("Erreur top artisans :", err));
  }, []);

  return (
    <>
    <div className="home-container container">
      <section className="intro">
        <hr className="red" />
        <h1>Comment trouver mon artisan ?</h1>
        <ol>
          <li>
            Choisir la catégorie d'artisanat dans le menu : celui-ci se trouve en
            haut de la page, vous pouvez choisir entre Alimentations, Bâtiments,
            Fabrications ou encore Services. Ou encore vous pouvez utiliser la
            barre de navigation si vous connaissez le nom d'un de nos artisans.
          </li>
          <li>
            Choisir un artisan : après votre recherche vous avez juste à cliquer
            sur la carte de l'artisan qui vous intéresse.
          </li>
          <li>
            Le contacter via le formulaire de contact : sur nos fiches artisans
            vous trouverez un formulaire qui vous permet de le contacter en
            donnant l'objet et le message de votre requête directement dans sa boîte
            mail.
          </li>
          <li>
            Une réponse vous sera apportée sous 48h.
          </li>
        </ol>
      </section>

      <section className="top-artisans">
        <hr className="green" />
        <h2>Nos Artisans du mois</h2>
        <div className="cards-wrapper">
          {topArtisans.map((artisan) => (
            <Link
              to={`/artisan/${artisan.id}`}
              key={artisan.id}
              className="card-link"
            >
              <div className="card">
                <div className="card-body">
                  <p className="card-text fw-bold">{artisan.nom}</p>
                  <p className="card-text">{artisan.Specialite?.nom}</p>
                  <p className="card-text">Ville : {artisan.ville}</p>
                  <p className="card-text">Note : {artisan.note} / 5</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
   
    </div>
    <div className="footer-wrapper">
      <Footer />
    </div>
  </>
  );
}

