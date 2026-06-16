import { useEffect, useRef, useState } from "react";
import "./Memory.css";

function createCards() {
  return ["A", "B", "C", "A", "B", "C"].sort(() => Math.random() - 0.5);
}

function MemoryGame() {
  const [card] = useState(createCards);
  const [memory, setMemory] = useState([]);
  const [match, setMatch] = useState([]);
  const [win, setWin] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const checkCard = (index) => {
    return memory.includes(index) || match.includes(index);
  };

  const handleClick = (index) => {
    if (win || match.length === 2) return;
    if (memory.includes(index) || match.includes(index)) return;

    if (match.length === 0) {
      setMatch([index]);
      return;
    }

    const first = match[0];

    if (card[first] === card[index]) {
      const next = [...memory, first, index];
      setMemory(next);
      setMatch([]);

      if (next.length === card.length) {
        setWin(true);
      }
    } else {
      setMatch([first, index]);
      timerRef.current = setTimeout(() => setMatch([]), 500);
      //不要使用普通 let timer，因为它会在每次 render 时重新创建。
    }
  };

  return (
    <div className="guessborad">
      {card.map((item, index) => {
        return (
          <div
            key={index}
            className="guessCard"
            onClick={() => handleClick(index)}
          >
            {checkCard(index) ? item : "?"}
          </div>
        );
      })}
      {win && <p>You win!</p>}
    </div>
  );
}

export default MemoryGame;
