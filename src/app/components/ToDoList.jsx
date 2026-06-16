import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [value, setTask] = useState("");
  
  const submit = () => {
    if (value !== "") {
      const next = [...list, { id: value, name: value }];
      setList(next);
      setTask("");
    }
  };

  const handleCancel = (id) => {
    const next = list.filter((item) => item.id !== id);
    setList(next);
  };

  const handleSeq = (flag, id) => {
    const index = list.findIndex((item) => item.id === id);
    const nextIndex = flag ? index - 1 : index + 1;

    if (index === -1 || nextIndex < 0 || nextIndex >= list.length) {
      return;
    }

    const next = [...list];
    [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
    setList(next);
  };

  return (
    <>
      <input
        value={value}
        placeholder={"Please Input a task"}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={submit}>submit </button>
      <ul>
        {list.map((item) => {
          return (
            <>
              <li key={item.id} onClick={() => handleCancel(item.id)}>
                {item.name}
              </li>
              <button onClick={() => handleSeq(true, item.id)}>Up</button>
              <button onClick={() => handleSeq(false, item.id)}>Down</button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
