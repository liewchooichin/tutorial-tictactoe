
import { useState } from "react";
import "../tictactoe.css";

function Square({value, onSquareClick}){
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

function Square_1() {
    /* states */
    const [value, setValue] = useState(null);

    /* Handle click event */
    function handleClick() {
        setValue("X");
    }

    return (
        <button 
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

function calculateWinner(squares) {
    // winner lines are defined here
    // The index of the squares.
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      // [a, b, c] is the index of the squares
      const [a, b, c] = lines[i];
      // If a square is not null, then
      // compare the content of the squares X or O.
      if (
        squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]) {
        // Return the content of the square: X or O 
        // to tell which one is the winner.
        return squares[a];
      }
    }
    return null;
  }

export function TicTacToeApp(){
    
    /* States of children square */
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    /* Handle click of the squares */
    /* Array.slice() return the whole arrays. */
    function handleClick(i){
        // If a square is already marked, then return early.
        // This is done so that a square that has been marked
        // cannot be changed.
        if(squares[i]==="X" || squares[i]==="O" || calculateWinner(squares))
            return;

        // creates a copy of the squares array (nextSquares) 
        const nextSquares = squares.slice();
        // update handleClick to update any square. 
        if(xIsNext)
            nextSquares[i] = "X";
        else
            nextSquares[i] = "O";
        // Set the square to X or O
        setSquares(nextSquares);
        // Toggle the flag for X or O
        setXIsNext(!xIsNext);
    }

    // Notice board to inform users of winner and status
    const winner = calculateWinner(squares);
    let status = "";
    if(winner)
        status = "Winner: " + winner
    else
        status = "Next player: " + (xIsNext ? "X" : "O");

    return(
        <div>
            <h2>TicTacToeApp</h2>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}
