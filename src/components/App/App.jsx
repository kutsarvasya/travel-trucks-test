import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(
  () => import("../../pages/CamperDetailsPage/CamperDetailsPage"),
);
const Features = lazy(() => import("../../components/Features/Features"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage"),
);
import { selectError, selectLoading } from "../../redux/catalog/slice";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CamperDetailsPage />}>
              <Route index element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
