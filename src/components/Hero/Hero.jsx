import ButtonLink from "../ButtonLink/ButtonLink";
import s from "./Hero.module.css";
function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.content}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>
          You can find everything you want in our catalog
        </p>
        <ButtonLink to="/catalog">View Now</ButtonLink>
      </div>
    </section>
  );
}
export default Hero;
