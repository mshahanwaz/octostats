import { FC } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import Fork from "../../../../public/svgs/Fork";

const Footer: FC = () => (
  <div className={styles.footer}>
    <code className={styles.line}>
      <p>Designed by</p>
      <Link href="https://github.com/mshahanwaz/">M. Shahanwaz</Link>
    </code>
    <code className={styles.line}>
      <p>View &amp; fork</p>
      <div className={styles.icon}>
        <Fork />
      </div>
      <p>on</p>
      <Link href="https://github.com/mshahanwaz/octostats/">
        mshahanwaz/octostats
      </Link>
    </code>
  </div>
);

export default Footer;
