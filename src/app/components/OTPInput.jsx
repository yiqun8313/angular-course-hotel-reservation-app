import { useRef, useState } from "react";
import "./OTPInput.css";

function OTPInput({ length = 6 }) {
  const [otp, setOtp] = useState(() => Array(length).fill(""));
  const inputRefs = useRef([]);

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handlePaste(event) {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData("text");
    const next = Array(length).fill("");

    for (let index = 0; index < length; index++) {
      next[index] = pastedValue[index] || "";
    }

    setOtp(next);
  }

  return (
    <div>
      <div className="otp-inputs" onPaste={handlePaste}>
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            value={value}
            inputMode="numeric"
            maxLength={1}
            aria-label={`OTP digit ${index + 1}`}
            onChange={(event) => handleChange(event.target.value, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>

      <p>OTP: {otp.join("")}</p>
    </div>
  );
}

export default OTPInput;
