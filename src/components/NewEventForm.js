import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm({ addEvent, handleClose}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
    handleClose();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button>Submit</button>
      <p>
        title: {title}, date: {date}
      </p>
    </form>
  );
}
