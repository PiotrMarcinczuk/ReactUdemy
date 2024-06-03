export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h1>Game Over</h1>
      {winner && <p>{winner} wins!</p>}
      {!winner && <p>remis</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
