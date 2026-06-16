import { useState } from "react";
import "./ClickOrderBoxes.css";

function ClickOrderBoxes({ count = 5 }) {
  const [clickOrder, setClickOrder] = useState([]);
  const [isResetting, setIsResetting] = useState(false);

  function handleClick(index) {
    if (isResetting || clickOrder.includes(index)) return;

    const nextOrder = [...clickOrder, index];
    setClickOrder(nextOrder);

    if (nextOrder.length === count) {
      resetInReverse(nextOrder);
    }
  }

  async function resetInReverse(order) {
    setIsResetting(true);

    for (const index of [...order].reverse()) {
      await wait(500);
      setClickOrder((current) => current.filter((item) => item !== index));//这步骤很重要呢
    }

    setIsResetting(false);
  }

  return (
    <div className="click-order-boxes">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          className={clickOrder.includes(index) ? "order-box active" : "order-box"}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default ClickOrderBoxes;
