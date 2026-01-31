import { NavLink } from "react-router-dom";

import s from "./ButtonMore.module.css";

function ButtonMore({ to, children }) {
  return (
    <NavLink to={to} className={s.button}>
      {children}
    </NavLink>
  );
}

export default ButtonMore;
