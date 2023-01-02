import "./App.css";
import Title from "./components/Title";
import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setshowModal] = useState(true);
  const [showEvents, setshowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo mo farm", id: 3 },
  ]);
  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const handleClose = () => setshowModal(false);

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
          <React.Fragment key={event.id}>
            <h2>
              {index}-{event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code!!</h2>
          <p>User the code NINJA!) at the checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
