import { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "active-tab" : ""}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content" role="tabpanel">
        {tabs[active].content}
      </div>
    </div>
  );
}

export default Tabs;
