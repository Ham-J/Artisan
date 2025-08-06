import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";



export default function Artisans() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nomCategorie = queryParams.get("categorie");

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    if (nomCategorie) {
      axios
        .get(`http://localhost:5000/artisans/byCategorie?nom=${nomCategorie}`)
        .then((res) => setArtisans(res.data))
        .catch((err) => console.error("Erreur catégorie :", err));
    }
  }, [nomCategorie]);

  return (
    <section className="container">
        <hr className="green" />
        <h1> Nos Artisans en {nomCategorie}</h1>

  {artisans.length === 0 ? (
    <p className="text-muted text-center mt-4">Aucun artisan trouvé.</p>
  ) : (
    <div className="artisans-grid container">
  {artisans.map((artisan) => (
    <div className="card-wrapper" key={artisan.id}>
      <Link to={`/artisan/${artisan.id}`} className="card-link">
        <div className="card">
          <h5 className="card-title">{artisan.nom}</h5>
          <p className="card-text">{artisan.Specialite?.nom}</p>
          <p className="card-text">Ville : {artisan.ville}</p>
          <p className="card-text">Note : {artisan.note} / 5</p>
        </div>
      </Link>
    </div>
  ))}
</div>


    
  )}
</section>

  );
}
