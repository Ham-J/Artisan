import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/nav";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/main.scss';
import Artisans from "./pages/Artisans";
function App() {
  return (
    <BrowserRouter>
      <AppWithNavbar />
    </BrowserRouter>
  );
}

function AppWithNavbar() {
  const location = useLocation();
  const path = location.pathname;

  const handleCategorieClick = (cat) => {
    console.log("Catégorie sélectionnée :", cat);
  };

  const validPaths = ["/", "/artisans", "/artisanscategorie"];
  
  const shouldShowNavbar =
    validPaths.some((validPath) => path === validPath || path.startsWith("/artisan/"));

  return (
    <>
      {shouldShowNavbar && <Navbar onCategorieClick={handleCategorieClick} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisanscategorie" element={<Artisans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
