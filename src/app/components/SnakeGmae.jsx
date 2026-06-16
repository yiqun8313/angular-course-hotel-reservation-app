import { useEffect, useState } from "react";
import "./Snake.css";

const BOARD_SIZE = 20;
const initialSnake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
];
const directions = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function createFood() {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE),
  };
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState(createFood);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (directions[event.key]) {
        setDirection(directions[event.key]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      setSnake((currentSnake) => {
        const head = currentSnake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        const hitWall = 
          newHead.x < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y < 0 ||
          newHead.y >= BOARD_SIZE;

        if (hitWall) {
          setGameOver(true);
          return currentSnake;
        }

        const ateFood = newHead.x === food.x && newHead.y === food.y;

        if (ateFood) {
          setFood(createFood());
          return [newHead, ...currentSnake];
        } else {
          return [newHead, ...currentSnake.slice(0, -1)];
        }
      });
    }, 300);

    return () => clearInterval(timer);
  }, [direction, food, gameOver]);

  function restartGame() {
    setSnake(initialSnake);
    setDirection({ x: 1, y: 0 });
    setFood(createFood());
    setGameOver(false);
  }

  function getClassName(isSnake, isFood) {
  if (isSnake) return "cell snake";
  if (isFood) return "cell food";
  return "cell";
}

  return (
    <div>
      <h2>Snake Game</h2>
      {gameOver && <h3>Game Over</h3>}

      <div className="board">
        {Array.from({ length: BOARD_SIZE }).map((_, y) =>
          Array.from({ length: BOARD_SIZE }).map((_, x) => {
            const isSnake = snake.some((part) => part.x === x && part.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={`${x}-${y}`}
                className={getClassName(isSnake, isFood)}
              />
            );
          }),
        )}
      </div>

      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
