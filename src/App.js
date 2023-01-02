import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("mario");
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo mo farm", id: 3 },
  ]);
  const changeName = () => {
    setName("luigi");
    console.log(name);
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
