import { FC } from "react";
import Search from "../Search";
import styles from "./Login.module.css";

const Login: FC = () => (
  <main className={styles.login}>
    <Card />
    <Status />
    <Footer />
  </main>
);

export default Login;
