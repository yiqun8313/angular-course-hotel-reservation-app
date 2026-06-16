import { useEffect, useState } from "react";
import "./Toast.css";

function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);


    // const timer = setTimeout(onClose,duration);
    // return () => clearTimeout;
  }, [duration, onClose]);

  return (
    <div className="toast" role="status">
      <span>{message}</span>
      <button type="button" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export function ToastDemo() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShowToast(true)}>
        Show Toast
      </button>

      {showToast && (
        <Toast
          message="Changes saved successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default Toast;
