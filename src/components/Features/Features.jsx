import { useOutletContext } from "react-router-dom";
import s from "./Features.module.css";

import TagList from "../TagList/TagList";
const FORM_LABEL = {
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};
function Features() {
  const { item } = useOutletContext();
  return (
    <div className={s.features}>
      <ul className={s.tags}>
        <TagList item={item} />
      </ul>
      <h3 className={s.title}>Vehicle details</h3>
      <div className={s.divider} />
      <dl className={s.list}>
        <div className={s.row}>
          <dt className={s.term}>Form</dt>
          <dd className={s.value}>{FORM_LABEL[item.form]}</dd>
        </div>
        <div className={s.row}>
          <dt className={s.term}>Length</dt>
          <dd className={s.value}>{item.length}</dd>
        </div>
        <div className={s.row}>
          <dt className={s.term}>Width</dt>
          <dd className={s.value}>{item.width}</dd>
        </div>
        <div className={s.row}>
          <dt className={s.term}>Height</dt>
          <dd className={s.value}>{item.height}</dd>
        </div>
        <div className={s.row}>
          <dt className={s.term}>Tank</dt>
          <dd className={s.value}>{item.tank}</dd>
        </div>
        <div className={s.row}>
          <dt className={s.term}>Consumption</dt>
          <dd className={s.value}>{item.consumption}</dd>
        </div>
      </dl>
    </div>
  );
}
export default Features;
