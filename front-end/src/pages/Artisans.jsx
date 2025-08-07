import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default function Artisans() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nomCategorie = queryParams.get("categorie");

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    if (nomCategorie) {
      axios
        .get(`https://artisan-backend-wcsv.onrender.com/artisans/byCategorie?nom=${nomCategorie}`)
        .then((res) => setArtisans(res.data))
        .catch((err) => console.error("Erreur catégorie :", err));
    }
  }, [nomCategorie]);

  return (
    <>
    <Helmet>
      <title>Liste des artisans-catégorie</title>
      <meta name="description" content="Liste des artisans adaptée à la catégorie, entre batiment, alimentation, services et fabrication" />
    </Helmet>
    <section className="container mb-5">
      <hr className="green" />
      <h1> Nos Artisans en {nomCategorie}</h1>

      {artisans.length === 0 ? (
        <p className="text-muted text-center mt-4">Aucun artisan trouvé.</p>
      ) : (
        <div className="artisans-grid">
        {artisans.map((artisan) => (
          <div className="card-wrapper" key={artisan.id}>
            <Link to={`/artisan/${artisan.id}`} className="card-link">
              <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text fw-bold">{artisan.nom}</p>
                <p className="card-text">
                {artisan.Specialite?.nom}</p>
                <p className="card-text">Ville : {artisan.ville}</p> 
              <p className="card-text">Note : {artisan.note} / 5</p>
            </div>
          </div>
        </Link>
      </div>
     ))}
    </div>
    )}
  </section>
  <div className="footer-wrapper">
    <Footer />
  </div>
</>
  );
}
