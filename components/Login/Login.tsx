import { FC } from "react";
import styles from "./Login.module.css";
import InputCard from "./components/InputCard";
import RequestInfo from "./components/RequestInfo";
import Footer from "./components/Footer";

const Login: FC = () => (
  <main className={styles.login}>
    <InputCard />
    <RequestInfo />
    <Footer />
  </main>
);

export default Login;
