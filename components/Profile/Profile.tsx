import styles from "./Profile.module.css";

export default function Profile(props: any) {
  const { data } = props;

  return (
    <div className={styles.profile}>
      <p>{data.name}</p>
    </div>
  );
}
