import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "../../pages/CamperDetailsPage/CamperDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="" element={<div>Features</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
