import image404 from "../assets/img/image_404.png";

export default function NotFound() {
  return (
    <>
    <div className="notfound-container text-center">
      <img src={image404} alt="Page non trouvée" />
      <p>Erreur 404 : page non trouvée</p>
    </div>
   </> 
  );
}
