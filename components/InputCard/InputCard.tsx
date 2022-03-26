import { FC } from "react";
import styles from "./InputCard.module.css";
import Logo from "../../public/svgs/Logo";

const InputCard: FC = () => (
  <div className={styles.inputCard}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <h1 className={styles.titleName}>Octostats</h1>
    <form>
      <input type="text" className={styles.input} />
    </form>
  </div>
);

export default InputCard;
