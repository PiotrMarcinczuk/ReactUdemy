import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  const result = score <= 0;
  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>{result ? "You Lost" : `Your score: ${score} `}</h2>
      <p>The target time was {targetTime}</p>
      <p>
        You stopped the timer with {(timeRemaining / 1000).toFixed(2)} seconds
        left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
