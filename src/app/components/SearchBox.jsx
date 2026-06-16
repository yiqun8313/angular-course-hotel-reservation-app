import { useState } from "react";

const searchItems = [
  "Apple",
  "Banana",
  "Blueberry",
  "Orange",
  "Strawberry",
];

function SearchBox() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(false);

  const filteredItems = selected
    ? []
    : searchItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase()),
      );

  const handleSelect = (item) => {
    setSearch(item);
    setSelected(true);
  };

  return (
    <div>
      <h2>Search Box</h2>

      <input
        value={search}
        placeholder="Search fruit"
        onChange={(event) => {
          setSearch(event.target.value);
          setSelected(false);
        }}
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item} onClick={() => handleSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
