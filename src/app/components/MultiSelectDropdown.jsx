import { useState } from "react";
import "./MultiSelectDropdown.css";

function MultiSelectDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOption(optionValue) {
    if (value.includes(optionValue)) {
      onChange(value.filter((item) => item !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  }

  const selectedLabels = options
    .filter((option) => value.includes(option.value))
    .map((option) => option.label);

  return (
    <div className="multi-select">
      <button
        type="button"
        className="multi-select-trigger"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabels.length > 0
          ? selectedLabels.join(", ")
          : "Select options"}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="multi-select-menu">
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={() => toggleOption(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelectDropdown;
