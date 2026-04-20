import React from "react";

const ResultModal = ({ ref, targetTime, timerExpired }) => {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {timerExpired ? "lost" : "won"}</h2>
      <p>The target time was {targetTime}</p>
      <p>You stopped the timer with X seconds left</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
