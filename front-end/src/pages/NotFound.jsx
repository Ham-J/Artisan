import image404 from "../assets/img/image_404.png";
import { Helmet } from "react-helmet";
export default function NotFound() {
  return (
    <>
    <Helmet>
        <title>Page 404</title>
        <meta name="description" content="Erreur page non trouvée" />
      </Helmet>
    <div className="notfound-container text-center">
      <img src={image404} alt="Page non trouvée" />
      <p>Erreur 404 : page non trouvée</p>
    </div>
   </> 
  );
}
