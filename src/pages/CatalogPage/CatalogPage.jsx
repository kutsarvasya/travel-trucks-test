import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from "../../redux/catalog/thunks";
import Catalog from "../../components/Catalog/Catalog";
import { selectPage, selectTotaPages } from "../../redux/catalog/slice";
import s from "./CatalogPage.module.css";

function CatalogPage() {
  const totalPages = useSelector(selectTotaPages);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatalog(1));
  }, [dispatch]);
  return (
    <>
      <Catalog />
      {page < totalPages && (
        <button
          className={s.button}
          onClick={() => dispatch(getCatalog(page + 1))}
        >
          Load More
        </button>
      )}
    </>
  );
}
export default CatalogPage;
