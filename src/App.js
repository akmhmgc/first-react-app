import "./App.css";
import Title from "./components/Title";
import Event from "./components/Event";
import NewEventForm from "./components/NewEventForm";
import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    setshowModal(false);
  };

  return (
    <div className="App">
      <Title
        title="Events in Your Area"
        subtitle="All the latest events in Marioland"
      />
      {showEvents && (
        <div>
          <button onClick={() => setshowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setshowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <Event
            key={event.id}
            handleClick={handleClick}
            title={event.title}
            id={event.id}
            location={event.location}
            date={event.date}
            index={index}
          />
        ))}
      {showModal && (
        <Modal isSalesModal={false}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <div>
        <button onClick={() => setshowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
