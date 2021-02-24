import React, { useEffect, useState } from "react";
import styles from "../styles/components/Countdown.module.css";
export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const minuto = Math.floor(time / 60);
  const second = time % 60;

  const [minutoLeft, minutoRight] = String(minuto).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(second).padStart(2, "0").split("");

  function startCount() {
    setActive(true);
  }
  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);
  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minutoLeft}</span>
          <span>{minutoRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCount}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
