import { NavLink } from "react-router-dom";

import s from "./ButtonLink.module.css";

function ButtonLink({ to, children }) {
  return (
    <NavLink to={to} className={s.button}>
      {children}
    </NavLink>
  );
}

export default ButtonLink;
