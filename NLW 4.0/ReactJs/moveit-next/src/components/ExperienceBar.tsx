import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";
export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  var percentToNextLevel = 0;
  if (currentExperience != 0) {
    percentToNextLevel =
      Math.round(currentExperience * 100) / experienceToNextLevel;
  }
  return (
    <header className={styles.experienceBar}>
      <span>8 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}>
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
