import "./TrafficLights.css";
import { useEffect, useState } from "react";

const light = [
  { color: "red", duration: 3000 },
  { color: "green", duration: 3000 },
  { color: "yellow", duration: 1000 },
];

function TrafficLights() {
  const [curActive, setActive] = useState(0);
  const [stop, setStop] = useState(false);
  const currentLight = light[curActive];


  useEffect(() => {
    if (stop) return;
    const timer = setTimeout(() => {
      setActive(pre => (pre + 1) % light.length);
    }, currentLight.duration);

    return () => clearTimeout(timer);
  }, [stop, curActive, currentLight.duration]);

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column" }} className="container">
      {light.map((item) => {
        const isActive = currentLight.color === item.color;
    
        return (
          <div
            key={item.color}
            className="light"
            onClick={() => setStop((current) => !current)}
            style={{
              background: isActive ? item.color : "#313131",
              opacity: isActive ? 1: 0.35,
              cursor: "pointer"
            }}
          />
        );
      })}
    </div>
     <>current color: {currentLight.color}</>
     </>
  );
}

export default TrafficLights;
