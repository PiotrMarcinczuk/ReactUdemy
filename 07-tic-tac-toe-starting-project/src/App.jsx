import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

let PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const BOARD_TAB = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function checkWinner(board, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const first = board[combination[0].row][combination[0].column];
    const second = board[combination[1].row][combination[1].column];
    const third = board[combination[2].row][combination[2].column];
    if (first && first === second && first === third) {
      winner = players[first];
    }
  }
  return winner;
}

function deriveBoard(gameTurns) {
  let board = [...BOARD_TAB.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = player;
  }
  return board;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const board = deriveBoard(gameTurns);
  const winner = checkWinner(board, players);
  const draw = gameTurns.length === 9 && !winner;

  function handleClickChangePlayer(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);
      const updated = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];

      return updated;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onRematch={handleRematch} />
        )}
        <GameBoard
          handleClickChangePlayer={handleClickChangePlayer}
          board={board}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
