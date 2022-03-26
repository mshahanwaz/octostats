import { FC } from "react";
import styles from "./Login.module.css";
import InputCard from "../InputCard";
import RequestInfo from "../RequestInfo";
import Footer from "../Footer";

const Login: FC = () => (
  <main className={styles.login}>
    <InputCard />
    <RequestInfo />
    <Footer />
  </main>
);

export default Login;
