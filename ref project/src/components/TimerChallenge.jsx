import { useState, useRef, forwardRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerRef = useRef();
  const dialogRef = useRef();

  let isActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    setTimeRemaining(targetTime * 1000);
    dialogRef.current.open();
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  }

  function onReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      {
        <ResultModal
          targetTime={targetTime}
          timeRemaining={timeRemaining}
          onReset={onReset}
          ref={dialogRef}
        />
      }
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handleStop : handleStart}>
            {isActive ? "Stop Challenge" : "Start Challange"}
          </button>
        </p>
        <p className={isActive ? "avtive" : undefined}>
          {isActive ? "Time is runing..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
