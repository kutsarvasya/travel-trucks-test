import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found</p>

      <Link to="/" className={styles.button}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
