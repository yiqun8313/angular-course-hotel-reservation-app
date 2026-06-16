import { useState } from "react";
import "./Accordion.css";
const data = [
  { title: "React", content: "React is a UI library." },
  { title: "Vue", content: "Vue is a frontend framework." },
  { title: "Angular", content: "Angular is a full framework." },

];
function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const items = data
  function toggleItem(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="accordion-item" key={item.title}>
            <button
              type="button"
              className="accordion-title"
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
            >
              {item.title}
              <span>{isOpen ? "-" : "+"}</span>
            </button>

            {isOpen && <div className="accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
