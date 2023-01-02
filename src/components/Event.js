import React from "react";
import styles from "./Event.module.css";
export default function Event({ index, id, title, handleClick }) {
  return (
    <div className={styles.card}>
      <h2>
        {index}-{title}
      </h2>
      <button onClick={() => handleClick(id)}>Delete Button</button>
    </div>
  );
}
