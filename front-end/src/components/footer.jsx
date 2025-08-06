import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/artisanscategorie?categorie=Bâtiment">Bâtiments</Link></li>
            <li><Link to="/artisanscategorie?categorie=Services">Services</Link></li>
            <li><Link to="/artisanscategorie?categorie=Fabrication">Fabrications</Link></li>
            <li><Link to="/artisanscategorie?categorie=Alimentation">Alimentations</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li><Link to="/mentions">Mentions légales</Link></li>
            <li><Link to="/donnees">Données personnelles</Link></li>
            <li><Link to="/accessibilites">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookie</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <ul>
            <li>101 cours Charlemagne</li>
            <li>CS 20033</li>
            <li>69269 Lyon CEDEX 02</li>
            <li>France</li>
            <li>+33 (0)4 26 73 40 00</li>
          </ul>
        </div>
      
      </div>
      <div className="footer-socials">
        <a href="https://www.facebook.com/?locale=fr_FR"><i className="bi bi-facebook"></i></a> 
        <a href="https://fr.linkedin.com/"><i className="bi bi-linkedin"></i></a>
        <a href="https://www.youtube.com/"><i className="bi bi-youtube"></i></a>
      </div>
    </footer>
  );
}
