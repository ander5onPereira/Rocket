import React from "react";
import styles from "../styles/components/Profile.module.css";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/22417542?s=460&u=ccfea0d37d04fc057d039c9423db158e0caac10c&v=4"
        alt="Anderson"
      />
      <div>
        <strong>Nome</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
        </p>
      </div>
    </div>
  );
}
