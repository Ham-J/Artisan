import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/nav";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const handleCategorieClick = (cat) => {
    console.log("Catégorie sélectionnée :", cat);

  };

  return (
    <BrowserRouter>
      <Navbar onCategorieClick={handleCategorieClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;