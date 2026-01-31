import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from "../../redux/catalog/thunks";
import Catalog from "../../components/Catalog/Catalog";
import {
  resetCatalog,
  selectPage,
  selectTotaPages,
} from "../../redux/catalog/slice";
import s from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters";

function CatalogPage() {
  const totalPages = useSelector(selectTotaPages);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatalog({ page: 1 }));
  }, [dispatch]);
  const handleSearch = () => {
    dispatch(resetCatalog());
    dispatch(getCatalog({ page: 1 }));
  };

  return (
    <div className={s.container}>
      <Filters onSearch={handleSearch} />
      <div className={s.catalog}>
        <Catalog />
        {page < totalPages && (
          <button
            className={s.button}
            onClick={() => dispatch(getCatalog({ page: page + 1 }))}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
export default CatalogPage;
