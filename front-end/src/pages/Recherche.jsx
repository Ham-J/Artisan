import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";

export default function Recherche() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`http://localhost:5000/artisans/search?search=${searchTerm}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error("Erreur recherche :", err));
    }
  }, [searchTerm]);

  return (
    <>
    <div className="container py-4">
        <hr className="green"/>
      <h1>Résultats pour : "{searchTerm}"</h1>
        <div className="artisans-grid">
            {results.length > 0 ? (
            results.map((artisan) => (
            <div className="card-wrapper" key={artisan.id}>
              <Link to={`/artisan/${artisan.id}`} className="card-link">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title fw-bold">{artisan.nom}</p>
                    <p className="card-text">{artisan.Specialite?.nom}</p>
                    <p className="card-text">Ville : {artisan.ville}</p>
                    <p className="card-text">Note : {artisan.note} / 5</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun artisan trouvé.</p>
        )}
      </div>
    </div>
    <div className="footer-wrapper">
        <Footer />
    </div>
    </>
  );
}
