import React from "react";
export default function Event({ index, id, title, handleClick }) {
  return (
    <>
      <h2>
        {index}-{title}
      </h2>
      <button onClick={() => handleClick(id)}>Delete Button</button>
    </>
  );
}
