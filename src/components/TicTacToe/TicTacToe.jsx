import { useState } from 'react';
import './styles.css';

const MOCK_WINNER_COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    let winner = null;
    for (let i = 0; i < MOCK_WINNER_COMBINATIONS.length; i++) {
        const targetA = squares[MOCK_WINNER_COMBINATIONS[i][0]];
        const targetB = squares[MOCK_WINNER_COMBINATIONS[i][1]];
        const targetC = squares[MOCK_WINNER_COMBINATIONS[i][2]];
        if (targetA && targetA === targetB && targetA === targetC) {
            winner = targetA;
            break;
        };
    }
    if (winner) return winner;
  };

  const handleClick = (index) => {
    if (!board[index]) {
           setBoard((prev) => prev.map((item, itemIndex) => {
            if (itemIndex === index) {
                return isXNext ? "X" : "O";
            }
            return item;
           }))
           setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every(cell => cell !== null);
  const isDraw = !winner && isBoardFull;

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>

      <div className="status">{status}</div>

      <div className="board">
        {board.map((cell, index) => (
          <button
            disabled={!cell && winner}
            key={index}
            className={`cell ${cell ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="restart-button" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}
