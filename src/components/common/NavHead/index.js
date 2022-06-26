import styles from "./style.module.css";
import logo1 from "../logo/image 1.png";
import logo2 from "../logo/image 2.png";

export const NavHead = () => {
  return (
    <div className={`${styles.head}`}>
      <img className={`${styles.logoImg}`} src={logo1} alt="" />
      <img className={`${styles.logoImg2}`} src={logo2} alt="" />
    </div>
  );
};
