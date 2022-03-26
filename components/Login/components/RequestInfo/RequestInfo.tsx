import { FC } from "react";
import styles from "./RequestInfo.module.css";

const Login: FC = () => {
  let rem = 51,
    total = 60;
  return (
    <code className={styles.requestInfo}>
      <b>{rem}</b>/<b>{total}</b> LEFT
    </code>
  );
};

export default Login;
