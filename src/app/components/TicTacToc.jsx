import { useState } from "react";

function TicTacToc() {

  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard); // 初始化棋盘
  const [isXNext, setIsXNext] = useState(true); // 用于跟踪当前是 X 还是 O
  const [step, setStep] = useState(0);
  const [record, setRecord] = useState([emptyBoard]); // 注意record要是state

  const handleClick = (index) => {

    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setRecord([...record.slice(0, step + 1), newBoard]);
    setIsXNext(!isXNext);
    setStep(step + 1);
  };


  const calculateWinner = (squares) => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const status = winner
    ? `获胜者: ${winner}`
    : `下一步: ${isXNext ? "X" : "O"}`;


  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setRecord([Array(9).fill(null)]);
    setStep(0);
  };


  const handlMemory =(flag) => {
    const nextStep = flag ? step - 1 : step + 1;
    setStep(nextStep);
    setBoard(record[nextStep]);
    setIsXNext(nextStep % 2 === 0);
  }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="xboard">
          {board.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <>
          <button disabled={step === 0} onClick={()=>handlMemory(true)}>pre</button>
         <button disabled={step === record.length - 1} onClick={()=>handlMemory(false)}>next</button>
                 <button className="reset-button" onClick={handleReset}>
          重置游戏
        </button>
        </>
      
      </div>
    );
  };


export default TicTacToc;
