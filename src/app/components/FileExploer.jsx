import React, { useState } from "react";

const files = {
  name: "src",

  children: [
    { name: "App.jsx" },
    {
      name: "components",
      children: [{ name: "Button.jsx" }, { name: "Modal.jsx" }],
    },
  ],
};

function Node({files}) {
    const [isOpen, setOpen] = useState(false);
    const isFolder = files.children;

    return (
        <>
        <div onClick={() => setOpen(!isOpen)}>
        { isFolder? (isOpen ? "📂" : "📁") : "📄"} {files.name}
        </div>

            {open && isFolder && files.children.map((item,index)=> {
                return <Node files={item} key={index} />
            })}
        </>
    )
}
