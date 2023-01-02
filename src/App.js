import "./App.css";
import Title from "./components/Title";
import React, { useState } from "react";

function App() {
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo mo farm", id: 3 },
  ]);
  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle="All the latest events in Marioland"/>
      <Title title="Another Events in Your Area" subtitle="Another Events in Marioland"/>
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
          <React.Fragment key={event.id}>
            <h2>
              {index}-{event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}
    </div>
  );
}

export default App;
