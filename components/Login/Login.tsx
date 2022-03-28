import styles from "./Login.module.css";
import InputCard from "./components/InputCard";
import RequestInfo from "./components/RequestInfo";
import Footer from "./components/Footer";

export default function Login() {
  return (
    <main className={styles.login}>
      <InputCard />
      <RequestInfo />
      <Footer />
    </main>
  );
}
