import s from "./CatalogItem.module.css";
import sprite from "../../assets/sprite.svg";
import ButtonLink from "../ButtonLink/ButtonLink";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFavorite,
  toggleFavorite,
} from "../../redux/favorites/favoritesSlice";
import clsx from "clsx";

import formatPrice from "../../helpers/formatPrice";
import TagList from "../TagList/TagList";

function CatalogItem({ i }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(i.id));

  return (
    <div className={s.card}>
      <div className={s.media}>
        <img
          className={s.img}
          src={i.gallery?.[0]?.original ?? ""}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={s.body}>
        <div>
          <div className={s.topRow}>
            <h3 className={s.title}>{i.name}</h3>

            <div className={s.rightTop}>
              <p className={s.price}>{formatPrice(i.price)}</p>
              <button
                type="button"
                className={clsx(s.favoriteBtn, isFavorite && s.active)}
                onClick={() => {
                  dispatch(toggleFavorite(i.id));
                }}
              >
                <svg className={s.favoriteIcon} width="25" height="24">
                  <use href={`${sprite}#favorite`} />
                </svg>
              </button>
            </div>
          </div>
          <div className={s.meta}>
            <span className={s.rating}>
              <svg className={s.star} width="15" height="14">
                <use href={`${sprite}#star`} />
              </svg>
              {i.rating}
              <span>({i.reviews?.length ?? 0} Reviews)</span>
            </span>
            <span className={s.location}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#location`} />
              </svg>
              {i.location}
            </span>
          </div>
        </div>

        <p className={s.desc}>{i.description}</p>
        <ul className={s.tags}>
          <TagList item={i} />
        </ul>

        <ButtonLink to={`/catalog/${i.id}`}>Show more</ButtonLink>
      </div>
    </div>
  );
}

export default CatalogItem;
