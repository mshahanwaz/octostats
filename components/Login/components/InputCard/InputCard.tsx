import styles from "./InputCard.module.css";
import * as React from "react";
import Logo from "../../../../public/svgs/Logo";

interface Username {
  username: string;
}

const InputCard: React.FC = () => {
  const [username, setUsername] = React.useState<Username | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    if (username) console.log(username, "is the one.");
    else console.log("error is coming!");
    setUsername();
  }

  return (
    <div className={styles.inputCard}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1 className={styles.titleName}>Octostats</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="@username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </form>
    </div>
  );
};

export default InputCard;
