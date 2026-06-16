import { useEffect, useRef, useState } from "react";
import "./InfiniteScroll.css";

function createItems(start, count) {
  const items = [];

  for (let number = start; number < start + count; number++) {
    items.push(number);
  }

  return items;
}

function InfiniteScroll() {
  const [items, setItems] = useState(() => createItems(1, 20));
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setItems((current) => [
          ...current,
          ...createItems(current.length + 1, 20),
        ]);
      }
    });

    const loader = loaderRef.current;

    if (loader) {
      observer.observe(loader);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="infinite-scroll">
      {items.map((item) => (
        <div className="infinite-item" key={item}>
          Item {item}
        </div>
      ))}

      <div ref={loaderRef}>Loading more...</div>
    </div>
  );
}

export default InfiniteScroll;
