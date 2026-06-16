import { useState } from "react";
import "./Wordls.css";

const ANSWER = "APPLE";
const MAX_GUESSES = 5;

export default function WordGuess() {
  const [guess, setGuess] = useState([]);
  const [value, setValue] = useState("");

  const [win, setWin] = useState(false);

  const submitOnce = () => {
    if (win) return;
    if (value.length !== ANSWER.length) return;
    if (guess.length == MAX_GUESSES) {
      return;
    }

    let next = [...guess, value.toUpperCase()];
    setGuess(next);

    if (value.toUpperCase() == ANSWER) {
      setWin(true);
    }
    setValue("");
  };

  const reset =() => {
    setGuess([]);
    setWin(false);
  }



  const getColor = (index, word) => {

    if (ANSWER.includes(word) && ANSWER[index] == word) {
      return "green";
    } else if (ANSWER.includes(word) && ANSWER[index] !== word) {
      return "yellow";
    } else if (!ANSWER.includes(word)) {
      return "red";
    }
  };

  const show = () => {
    if (guess.length == MAX_GUESSES) return false
    if (!win) return true;
  }

  return (
    <>
      {guess.map((item, index) => {
        const curWord = item.split("");
        return (
          <div className="word-row" key={index}>
            {curWord.map((word, wordIndex) => {
              return (
                <div
                  className="word-box"
                  style={{ background: getColor(wordIndex, word) }}
                  key={wordIndex+ index}
                >
                  {word}
                </div>
              );
            })}
          </div>
        );
      })}

      { show() && <input
        onChange={(e) => setValue(e.target.value)}
        value={value.toUpperCase()}
        disabled={value.length === MAX_GUESSES}
      />
      }

      <button onClick={submitOnce}>submit</button>
      <button onClick={reset}>Rest</button>
      <span>{win &&  "You have win"}</span>
      <span>{guess.length == MAX_GUESSES && !win &&  "You have LOST"}</span>
    </>
  );
}
