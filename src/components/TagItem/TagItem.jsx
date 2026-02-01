import sprite from "../../assets/sprite.svg";
import s from "./TagItem.module.css";
function TagItem({ label, icon, fill = false }) {
  return (
    <li className={s.tag}>
      <svg className={fill ? s.icon : undefined} width="20" height="20">
        <use href={`${sprite}#${icon}`} />
      </svg>
      {label}
    </li>
  );
}
export default TagItem;
