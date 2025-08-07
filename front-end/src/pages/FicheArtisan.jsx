import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import images from '../assets/img/images.jpg';
import { Helmet } from "react-helmet";
export default function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    axios
      .get(`https://artisan-backend-wcsv.onrender.com/artisans/${id}`)
      .then(res => setArtisan(res.data))
      .catch(err => console.error("Erreur fiche artisan :", err));
  }, [id]);

  if (!artisan) return <div className="container py-5">Chargement...</div>;

  return (
    <>
    <Helmet>
      <title>Fiche artisan</title>
      <meta name="description" content="Fiche de l'artisan détaillée avec formulaire de contact" />
    </Helmet>
    <div className="container fiche-artisan py-5">
      <h1 className="text-center mb-5 ">Fiche artisan</h1>

      <div className="row gx-5">
        
        <div className="col-md-6">
          <img src={images} alt="Logo" className="mb-2"/>
          <p><strong>Nom de l’artisan :</strong> {artisan.nom}</p>
          <p><strong>Note :</strong> {artisan.note} / 5</p>
          <p><strong>Sa spécialité :</strong> {artisan.Specialite?.nom}</p>
          <p><strong>Localisation :</strong> {artisan.ville}</p>
          <hr className="red"/>
          <p className="mt-4">À propos</p>
          <p>{artisan.a_propos || "Cet artisan n'a pas encore rédigé de description."}</p>

          {artisan.site_web && (
            <p>
              <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
                Voir le site internet de l’artisan
              </a>
            </p>
          )}
        </div>

        <div className="col-md-6">
          <div className="contact-form">
            
            <h2 className="mb-3">Formulaire de contact</h2>
            <hr className="green"/>
            <form method="GET" action={`mailto:${artisan.email}`} encType="text/plain">
              <input className="form-control mb-2" type="text" placeholder="Votre nom" required />
              <input className="form-control mb-2" type="email" placeholder="Votre email" required />
              <input className="form-control mb-2" name="subject" type="text" placeholder="Objet du message" required />
              <textarea className="form-control mb-3" name="body" rows="4" placeholder="Votre message" required></textarea>
              <button className="btn btn-primary w-100" type="submit">ENVOYER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        <div className="footer-wrapper">
            <Footer />
        </div>
    </>
  );
}
