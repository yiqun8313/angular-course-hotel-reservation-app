import { useState } from "react";
import "./VirtualList.css";

const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 40;
const CONTAINER_HEIGHT = 400;

function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);// scroll / item_height
  const visibleCount = Math.ceil(CONTAINER_HEIGHT  / ITEM_HEIGHT); // container height/ height


  const endIndex = Math.min(
    TOTAL_ITEMS - 1,
    startIndex + visibleCount,
  );


  
  const visibleItems = [];
  for (let index = startIndex; index <= endIndex; index++) {
    visibleItems.push(index);
  }

  return (
    <div
      className="virtual-list"
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)} // setstate event。currenttarget.scrolltop
    >
      <div
        className="virtual-list-space"
        style={{ height: TOTAL_ITEMS * ITEM_HEIGHT }}//1000 * 每个的高度
      >
        {visibleItems.map((index) => (
          <div
            key={index}
            className="virtual-list-item" // 记住每个是absoulute
            style={{
              top: index * ITEM_HEIGHT,  // 初始化的 高度
              height: ITEM_HEIGHT, //每个高度
            }}
          >
            Row {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualList;
