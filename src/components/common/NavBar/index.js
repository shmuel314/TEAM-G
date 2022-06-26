import styles from "./style.module.css";

import { BsColumnsGap } from "react-icons/bs";
import { NavButton } from "../NavButton/NavButton";
import { NavHead } from "../NavHead";

export const NavBar = () => {
  return (
    <div className={`${styles.box}`}>
      <NavHead />
      <ul>
        <li className={`${styles.btn}`}>
          <NavButton
            icon={<BsColumnsGap className={`${styles.icon}`} />}
            text="Dashboard"
            link=""
          />
        </li>
      </ul>
    </div>
  );
};
