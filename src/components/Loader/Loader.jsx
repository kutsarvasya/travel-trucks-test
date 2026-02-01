import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass={styles.loaderWrapper}
      />
    </div>
  );
};
export default Loader;
