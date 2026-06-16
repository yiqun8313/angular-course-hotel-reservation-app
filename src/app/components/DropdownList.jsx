import { useState } from "react";
import "./DropdownList.css";

function DropdownList({ options, value, onChange, placeholder = "Please select" }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? "" : "dropdown-placeholder"}>
          {selectedOption?.label || placeholder}
        </span>
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={option.value === value ? "selected" : ""}
                onClick={() => handleSelect(option)}
              >
                {option.label}
                {option.value === value && <span>✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownList;
