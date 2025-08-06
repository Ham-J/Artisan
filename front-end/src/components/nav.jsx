import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from '../assets/img/Logo.png';


export default function Navbar({ onCategorieClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
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
              <button
                className="btn nav-link"
                onClick={() => onCategorieClick(cat.nom)}
              >
                {cat.nom}
              </button>
            </li>
          ))}
        </ul>

        <div className="input-group w-auto">
          <input type="search" className="form-control" placeholder="Rechercher..." />
          <button className="btn btn-outline-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>

      </div>
    </nav>
  );
}
