
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

function Board({xIsNext, squares, onPlay}){
    
    /* States of children square */
    /* Move the squares into the top level game - App */
    // const [squares, setSquares] = useState(Array(9).fill(null));
    //const [xIsNext, setXIsNext] = useState(true);

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
        // Keep the history of play
        onPlay(nextSquares);
        // Set the square to X or O
        // To be handled by the top level game
        // setSquares(nextSquares);
        // Toggle the flag for X or O
        // To be handled by the top level game
        // setXIsNext(!xIsNext);
    }

    // Notice board to inform users of winner and status
    const winner = calculateWinner(squares);
    let status = "";
    if(winner)
        status = "Winner: " + winner
    else
        status = "Next player: " + (xIsNext ? "X" : "O");

    return(
        <>
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
        </>
    )
}


/**
 * Top level App. Hierarchy Game - Board - Square
 * To render the squares for the current move, you’ll want to read the last squares array from the history.
 * For example, if history is [[null,null,null], ["X",null,null]] and nextSquares is
 *  ["X",null,"O"], then the new [...history, nextSquares] array will be [[null,null,null],
 *  ["X",null,null], ["X",null,"O"]].
 */
export function TicTacToeApp(){

    /**
     * xIsNext === true when currentMove is even and xIsNext === false when 
     * currentMove is odd. In other words, if you know the value of currentMove, 
     * then you can always figure out what xIsNext should be.
     */
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = (currentMove % 2)===0
    const currentSquares = history[currentMove]; // show which history in the moves

    function handlePlay(nextSquares){
        // Update history by appending the updated squares array
        // as a new history entry.
        // Toggle xIsNext.
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    /** Use history array to jump to a particular set of moves
     * in the history.
     * Next, update the jumpTo function inside Game to update that currentMove. 
     * You’ll also set xIsNext to true if the number that you’re changing 
     * currentMove to is even. It is because X is the first (1) move--odd number.
     * 
     * If you “go back in time” and then make a new move from that point, you only want to keep 
     * the history up to that point. Instead of adding nextSquares after all items (... spread 
     * syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so 
     * that you’re only keeping that portion of the old history.
     * 
     * Each time a move is made, you need to update currentMove to point to the latest history 
     * entry.
     * The slice() method of Array instances returns a shallow copy of a portion of an array 
     * into a new array object selected from start to end (end not included).
     * 
    */
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    
    function getHistoryMove(squares, move_index){
        let description = "";
        if(move_index > 0)
            description = "Go to move #" + move_index;
        else
            description = "Go to game start";
        return(
            <li key={move_index}>
                <button onClick={() => jumpTo(move_index)}>
                    {description}
                </button>
            </li>
        )
    }
    const moves = history.map((squares, move_index) => getHistoryMove(squares, move_index));

    return (
        <div className="game">
          <div className="game-board">
            <Board 
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
            />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      );
}