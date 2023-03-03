import { useState } from "react";

/** This custom hook returns helper functions that change which visual mode is being used */
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  /** This function transitions from previous mode to a new mode. */
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    replace
      ? setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode])
      : setHistory((prev) => [...prev, newMode]);
  };

  /** Sets the previous mode as the current mode. */
  const back = () => {
    if (history.length <= 1) {
      return;
    }
    const newHistory = [...history];
    console.log('history', history, newHistory)
    newHistory.pop();
    const prevMode = newHistory[newHistory.length - 1];
    setMode(prevMode);
    setHistory(newHistory);
  };

  return { mode, transition, back };
}

// [1]