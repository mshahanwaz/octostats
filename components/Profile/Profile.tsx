import styles from "./Profile.module.css";

export default function Profile({ id }: { id: string }) {
  return (
    <div className={styles.profile}>
      <h1>Profile of {id}</h1>
    </div>
  );
}
