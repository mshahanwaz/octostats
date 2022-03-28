import styles from "./RequestInfo.module.css";

export default function RequestInfo() {
  let rem = 51,
    total = 60;

  return (
    <code className={styles.requestInfo}>
      <b>{rem}</b>/<b>{total}</b> LEFT
    </code>
  );
}
