import s from "./Stars.module.css";
import sprite from "../../assets/sprite.svg";

function Stars({ value }) {
  return (
    <div className={s.stars} aria-label={`Rating ${value}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={i < value ? s.starActive : s.starEmpty}
          width="16"
          height="16"
          aria-hidden="true"
        >
          <use href={`${sprite}#star`} />
        </svg>
      ))}
    </div>
  );
}
export default Stars;
