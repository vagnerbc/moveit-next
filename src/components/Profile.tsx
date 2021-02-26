import { useContext } from "react";
import { ChallengesContext } from "../contexts/challengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.container}>
      <img src="https://github.com/vagnerbc.png" alt="Vagner B.C" />
      <div>
        <strong>Vagner Bernal de Castro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
