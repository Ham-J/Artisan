import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '../assets/img/Logo.png';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/recherche?query=${encodeURIComponent(search)}`);
      setSearch(""); 
    }
  };



  useEffect(() => {
    axios.get("https://artisan-backend-wcsv.onrender.com/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
 
  return (
    <nav className="navbar navbar-expand-lg  px-3">
      <Link className="navbar-brand pt-0 pb-0" to="/">  <img src={logo} alt="Logo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCategories">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navCategories">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {categories.map((cat) => (
            <li className="nav-item" key={cat.id}>
              <Link to={`/artisanscategorie?categorie=${encodeURIComponent(cat.nom)}`} className="nav-link">{cat.nom}</Link>
            </li>      
          ))}
      
        </ul>

        <form className="d-flex" onSubmit={handleSearch}>
          <input type="search" className="form-control" placeholder="Rechercher..." value={search} 
          onChange={(e) => setSearch(e.target.value)}/>
          <button className="btn btn-outline-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
  </nav>
  );
}