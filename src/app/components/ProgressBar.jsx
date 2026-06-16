import { useState } from "react";
import "./ProgressBar.css";

function ProgressBar({ value }) {
  const max = Math.max(0, value)
  const progress = Math.min(100, max);

  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
    >
      <div className="progress-fill" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}

export function ProgressBarDemo() {
  const [progress, setProgress] = useState(30);

  return (
    <div>
      <ProgressBar value={progress} />

      <button onClick={() => setProgress((current) => current - 1)}>
        -1
      </button>
      <button onClick={() => setProgress((current) => current + 1)}>
        +1
      </button>
    </div>
  );
}

export default ProgressBar;
