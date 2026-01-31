import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import s from "./Filters.module.css";

import sprite from "../../assets/sprite.svg";
import {
  selectFilters,
  setForm,
  setLocation,
  setTransmission,
  toggleEquipment,
} from "../../redux/filters/filtersSlice";
import LocationAutocomplete from "../LocationAutocomplete/LocationAutocomplete";

function Filters({ onSearch }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const toggleForm = (value) =>
    dispatch(setForm(filters.form === value ? "" : value));
  console.log(filters);
  return (
    <aside className={s.filters}>
      <label className={s.label}>
        Location
        <LocationAutocomplete
          value={filters.location}
          onChange={(value) => dispatch(setLocation(value))}
        />
      </label>
      <p className={s.filtersInfo}>Filters</p>
      <h3 className={s.title}>Vehicle equipment</h3>
      <div className={s.equipmentList}>
        <button
          className={clsx(s.tile, filters.equipment.AC && s.active)}
          onClick={() => dispatch(toggleEquipment("AC"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#wind`} />
          </svg>
          AC
        </button>
        <button
          className={clsx(
            s.tile,
            filters.transmission === "automatic" && s.active,
          )}
          onClick={() =>
            dispatch(
              setTransmission(
                filters.transmission === "automatic" ? "" : "automatic",
              ),
            )
          }
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#transmission`} />
          </svg>
          Automatic
        </button>
        <button
          className={clsx(s.tile, filters.equipment.kitchen && s.active)}
          onClick={() => dispatch(toggleEquipment("kitchen"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#kitchen`} />
          </svg>
          Kitchen
        </button>
        <button
          className={clsx(s.tile, filters.equipment.TV && s.active)}
          onClick={() => dispatch(toggleEquipment("TV"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#tv`} />
          </svg>
          TV
        </button>
        <button
          className={clsx(s.tile, filters.equipment.bathroom && s.active)}
          onClick={() => dispatch(toggleEquipment("bathroom"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#bathroom`} />
          </svg>
          Bathroom
        </button>
        <button
          className={clsx(s.tile, filters.equipment.gas && s.active)}
          onClick={() => dispatch(toggleEquipment("gas"))}
        >
          <svg className={s.icon} width="32" height="32">
            <use href={`${sprite}#gas`} />
          </svg>
          Gas
        </button>
        <button
          className={clsx(s.tile, filters.equipment.microwave && s.active)}
          onClick={() => dispatch(toggleEquipment("microwave"))}
        >
          <svg className={s.icon} width="32" height="32">
            <use href={`${sprite}#microwave`} />
          </svg>
          Microwave
        </button>
        <button
          className={clsx(s.tile, filters.equipment.radio && s.active)}
          onClick={() => dispatch(toggleEquipment("radio"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#radio`} />
          </svg>
          Radio
        </button>
        <button
          className={clsx(s.tile, filters.equipment.refrigerator && s.active)}
          onClick={() => dispatch(toggleEquipment("refrigerator"))}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#refrigerator`} />
          </svg>
          Refrigerator
        </button>
        <button
          className={clsx(s.tile, filters.equipment.water && s.active)}
          onClick={() => dispatch(toggleEquipment("water"))}
        >
          <svg className={s.icon} width="32" height="32">
            <use href={`${sprite}#water`} />
          </svg>
          Water
        </button>
      </div>
      <h3 className={s.title}>Vehicle type</h3>
      <div className={s.equipmentList}>
        <button
          className={clsx(s.tile, filters.form === "panelTruck" && s.active)}
          onClick={() => toggleForm("panelTruck")}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#panelTruck`} />
          </svg>
          Van
        </button>
        <button
          className={clsx(
            s.tile,
            filters.form === "fullyIntegrated" && s.active,
          )}
          onClick={() => toggleForm("fullyIntegrated")}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#fullyIntegrated`} />
          </svg>
          Fully Integrated
        </button>
        <button
          className={clsx(s.tile, filters.form === "alcove" && s.active)}
          onClick={() => toggleForm("alcove")}
        >
          <svg className={""} width="32" height="32">
            <use href={`${sprite}#alcove`} />
          </svg>
          Alcove
        </button>
      </div>
      <button className={s.searchBtn} onClick={onSearch}>
        Search
      </button>
    </aside>
  );
}

export default Filters;
