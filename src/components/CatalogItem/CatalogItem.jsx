import s from "./CatalogItem.module.css";
import sprite from "../../assets/sprite.svg";
import ButtonLink from "../ButtonLink/ButtonLink";

const formatPrice = (value) =>
  new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);

function CatalogItem({ i }) {
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
                className={s.favoriteBtn}
                onClick={() => {}}
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
          <li className={s.tag}>
            <svg className={""} width="20" height="20">
              <use href={`${sprite}#transmission`} />
            </svg>
            {i.transmission}
          </li>
          <li className={s.tag}>
            <svg className={""} width="20" height="20">
              <use href={`${sprite}#fuel`} />
            </svg>
            {i.engine}
          </li>
          {i.AC && (
            <li className={s.tag}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#wind`} />
              </svg>
              AC
            </li>
          )}
          {i.bathroom && (
            <li className={s.tag}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#bathroom`} />
              </svg>
              bathroom
            </li>
          )}
          {i.kitchen && (
            <li className={s.tag}>
              {" "}
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#kitchen`} />
              </svg>
              kitchen
            </li>
          )}
          {i.TV && (
            <li className={s.tag}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#tv`} />
              </svg>
              TV
            </li>
          )}
          {i.radio && (
            <li className={s.tag}>
              {" "}
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#radio`} />
              </svg>
              radio
            </li>
          )}
          {i.refrigerator && (
            <li className={s.tag}>
              <svg className={""} width="20" height="20">
                <use href={`${sprite}#refrigerator`} />
              </svg>
              refrigerator
            </li>
          )}
          {/* {i.microwave && (
            <li className={s.tag}>
              <svg className={s.icon} width="20" height="20">
                <use href={`${sprite}#microwave`} />
              </svg>
              microwave
            </li>
          )}
          {i.gas && (
            <li className={s.tag}>
              <svg className={s.icon} width="20" height="20">
                <use href={`${sprite}#gas`} />
              </svg>
              gas
            </li>
          )}
          {i.water && (
            <li className={s.tag}>
              <svg className={s.icon} width="20" height="20">
                <use href={`${sprite}#water`} />
              </svg>
              water
            </li>
          )} */}
        </ul>
        <ButtonLink to={`/catalog/${i.id}`}>Show more</ButtonLink>
      </div>
    </div>
  );
}

export default CatalogItem;
