import { useEffect, useState } from "react";
import "./Autocomplete.css";

function Autocomplete({ options }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!value.trim()) {
        setSuggestions([]);
        return;
      }// timer当中 若是没有值 就设置为空

      const search = value.toLowerCase();
      setSuggestions(
        options.filter((option) => option.toLowerCase().includes(search)),
      );//有值就设置成我们都要的
    }, 300);

    return () => clearTimeout(timer);
  }, [options, value]);



  function selectOption(option) {
    setValue(option);
    setSuggestions([]);
  }

  return (
    <div className="autocomplete">
      <input
        value={value}
        placeholder="Search technology"
        onChange={(event) => setValue(event.target.value)}
      />

      {suggestions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => selectOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Autocomplete;
