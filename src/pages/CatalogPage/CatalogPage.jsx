import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCatalog } from "../../redux/catalog/thunks";
import Catalog from "../../components/Catalog/Catalog";

function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);
  return <Catalog />;
}
export default CatalogPage;
