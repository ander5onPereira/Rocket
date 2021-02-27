import React, { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const {
    minuto,
    second,
    hasFinished,
    isActive,
    resetCount,
    startCount,
  } = useContext(CountdownContext);

  const [minutoLeft, minutoRight] = String(minuto).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(second).padStart(2, "0").split("");

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

      {hasFinished ? (
        <button disabled className={`${styles.countdownButton} `}>
          Ciclo encerrado <img src="icons/ok.svg" alt="Level" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCount}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCount}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
