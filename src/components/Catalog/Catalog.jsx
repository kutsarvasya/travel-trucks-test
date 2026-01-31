import { useSelector } from "react-redux";
import { selectCatalog } from "../../redux/catalog/slice";
import s from "./Catalog.module.css";

import CatalogItem from "../CatalogItem/CatalogItem";

function Catalog() {
  const catalog = useSelector(selectCatalog);

  return (
    <>
      {catalog && (
        <ul className={s.list}>
          {catalog.map((i) => (
            <li key={i.id}>
              <CatalogItem i={i} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Catalog;
