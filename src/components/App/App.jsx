import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "../../pages/CamperDetailsPage/CamperDetailsPage";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { selectError, selectLoading } from "../../redux/catalog/slice";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function App() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route index element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loader />}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
