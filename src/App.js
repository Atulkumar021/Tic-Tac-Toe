import React, { useState, useEffect } from 'react'
import './App.css'

import Board from './components/board/Board'
import Scoreboard from './components/scoreboard/Scoreboard'
import Resetbtn from './components/resetbutton/Resetbtn'

const App = () => {
  const Win_Conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const initialScores = JSON.parse(localStorage.getItem('scores')) || { xScore: 0, oScore: 0 };
  const [board, setBoard] = useState(Array(9).fill(null));
  const [Xplaying, setXplaying] = useState(true);
  const [scores, setScores] = useState(initialScores);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const handleclickbox = (boxIdx) => {
    if (gameOver || board[boxIdx]) return;

    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return Xplaying === true ? 'X' : 'O';
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      const newScores = { ...scores };
      if (winner === 'O') {
        newScores.oScore += 1;
      } else {
        newScores.xScore += 1;
      }
      setScores(newScores);
      setGameOver(true);
    }

    setBoard(updatedBoard);
    setXplaying(!Xplaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < Win_Conditions.length; i++) {
      const [x, y, z] = Win_Conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setTimeout(() => {
          alert('Player ' + board[x] + ' wins!');
        }, 100);
        return board[x];
      }
    }
    return null;
  };

  const resetScores = () => {
    const initialScores = { xScore: 0, oScore: 0 };
    setScores(initialScores);
    localStorage.setItem('scores', JSON.stringify(initialScores));
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Scoreboard scores={scores} Xplaying={Xplaying} />
      <Board board={board} onClick={gameOver? resetBoard:handleclickbox} />
      <Resetbtn resetboard={resetBoard} resetScores={resetScores}/>
    </div>
  );
}

export default App;
