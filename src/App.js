import "./App.css";
import Title from "./components/Title";
import Event from "./components/Event";
import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setshowModal] = useState(false);
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
          <Event key={event.id} handleClick={handleClick} title={event.title} id={event.id} index={index}/>
        ))}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code!!</h2>
          <p>User the code NINJA!) at the checkout</p>
        </Modal>
      )}
      <div>
        <button onClick={() => setshowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
