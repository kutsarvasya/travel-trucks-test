import { useSelector } from "react-redux";
import { selectSelectedItem } from "../../redux/catalog/slice";
import { NavLink, Outlet } from "react-router-dom";
import s from "./CamperDetails.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
function CamperDetails() {
  const item = useSelector(selectSelectedItem);
  console.log(item);
  return (
    item && (
      <div>
        <div className={s.topRow}>
          <h3 className={s.title}>{item.name}</h3>
          <div className={s.meta}>
            <span className={s.rating}>
              <svg className={s.star} width="15" height="14">
                <use href={`${sprite}#star`} />
              </svg>
              {item.rating}
              <span>({item.reviews?.length ?? 0} Reviews)</span>
            </span>
            <span className={s.location}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#location`} />
              </svg>
              {item.location}
            </span>
          </div>
          <div className={s.rightTop}>
            <p className={s.price}>{formatPrice(item.price)}</p>
          </div>
        </div>
        <ul className={s.gallery}>
          {item.gallery?.map((img) => (
            <li className={s.media} key={img.thumb}>
              <img
                src={img.thumb}
                alt={item.name}
                className={s.img}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        <p className={s.desc}>{item.description}</p>
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
        <Outlet />
      </div>
    )
  );
}

export default CamperDetails;
