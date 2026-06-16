import { useState } from "react";

function TreeItem({ item, depth, openDepth }) {
  const hasChildren = item.children?.length > 0;
  //const isOpen = depth < openDepth;

  const [isOpen, handleOpen] = useState(false);

  return (
    <li>
      <div>
        {item.name}
        {hasChildren && (isOpen ? (<div onClick={()=>handleOpen(!isOpen)}>"[-]"</div>) : 
                                   (<div onClick={()=>handleOpen(!isOpen)}>"[+]"</div>))}
      </div>

      {hasChildren && isOpen && (
        <ul>
          {item.children.map((child) => (
            <TreeItem
              key={child.name}
              item={child}
              depth={depth + 1}
              openDepth={openDepth}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function RecursiveItems({ data }) {
  const [openDepth, setOpenDepth] = useState(1);

  return (
    <>
      <label>
        Show through level
        <input
          type="number"
          min="1"
          value={Number.isFinite(openDepth) ? openDepth : ""}
          onChange={(event) => setOpenDepth(Number(event.target.value) || 1)}
        />
      </label>

      <button type="button" onClick={() => setOpenDepth(Infinity)}>
        Expand all
      </button>

      <button type="button" onClick={() => setOpenDepth(1)}>
        Collapse all
      </button>

      <ul>
        {data.map((item) => (
          <TreeItem
            key={item.name}
            item={item}
            depth={1}
            openDepth={openDepth}
          />
        ))}
      </ul>
    </>
  );
}

export default RecursiveItems;
