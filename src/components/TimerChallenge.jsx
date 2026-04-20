import React, { useEffect, useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialog.current.showModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    setTimerStarted(false);
    clearTimeout(timer.current);
    setTimerExpired(false);
    dialog.current.showModal();
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timerExpired={timerExpired}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
