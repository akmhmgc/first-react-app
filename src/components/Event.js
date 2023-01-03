import React from "react";
import styles from "./Event.module.css";
export default function Event({
  index,
  id,
  title,
  location,
  date,
  handleClick,
}) {
  return (
    <div className={styles.card}>
      <h2>
        {index}-{title}
      </h2>
      <p>
        {location} - {date}
      </p>
      <button onClick={() => handleClick(id)}>Delete Button</button>
    </div>
  );
}
