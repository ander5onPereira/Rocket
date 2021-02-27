import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
interface CountdownContextData {
  minuto: number;
  second: number;
  hasFinished: boolean;
  isActive: boolean;
  startCount: () => void;
  resetCount: () => void;
}
interface CountdownProviderProps {
  children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData);
let countdownTimeout: NodeJS.Timeout;
export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minuto = Math.floor(time / 60);
  const second = time % 60;
  function startCount() {
    setIsActive(true);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function resetCount() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }
  return (
    <CountdownContext.Provider
      value={{
        minuto,
        second,
        hasFinished,
        isActive,
        startCount,
        resetCount,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
