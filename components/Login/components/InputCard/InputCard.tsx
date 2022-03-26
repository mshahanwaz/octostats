import styles from "./InputCard.module.css";
import * as React from "react";
import Logo from "../../../../public/svgs/Logo";
import { useRouter } from "next/router";

const InputCard: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username) console.log(username, "is the one.");
    else console.log("error is coming!");
    router.push("/user/" + username.split(" ")[0]);
  }

  return (
    <div className={styles.inputCard}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1 className={styles.titleName}>Octostats</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="@username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputCard;
