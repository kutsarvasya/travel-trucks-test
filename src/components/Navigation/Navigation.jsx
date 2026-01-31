import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <NavLink to="/" className={s.logo}>
            Travel<span className={s.trucks}>Trucks</span>
          </NavLink>

          <nav className={s.nav}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
            >
              Home
            </NavLink>

            <NavLink
              to="/catalog"
              end
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
            >
              Catalog
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Navigation;
