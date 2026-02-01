import { useOutletContext } from "react-router-dom";

import s from "./Reviews.module.css";
import Stars from "../Stars/Stars";

function Reviews() {
  const { item } = useOutletContext();
  return (
    <ul className={s.list}>
      {item.reviews.map((r, idx) => {
        const letter = (r.reviewer_name?.[0] ?? "?").toUpperCase();

        return (
          <li className={s.item} key={`${r.reviewer_name}-${idx}`}>
            <div className={s.header}>
              <div className={s.avatar} aria-hidden="true">
                {letter}
              </div>

              <div className={s.meta}>
                <p className={s.name}>{r.reviewer_name}</p>
                <Stars value={r.reviewer_rating} />
              </div>
            </div>

            <p className={s.comment}>{r.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;
