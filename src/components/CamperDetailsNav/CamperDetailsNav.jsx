import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./CamperDetailsNav.module.css";

function CamperDetailsNav() {
  return (
    <nav className={s.nav}>
      <NavLink
        to=""
        end
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Features
      </NavLink>

      <NavLink
        to="reviews"
        end
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Reviews
      </NavLink>
    </nav>
  );
}

export default CamperDetailsNav;
