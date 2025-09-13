import React, { useState } from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import ScheduledEvents from "./components/ScheduledEvents";
import AISuggestions from "./components/AISuggestions";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <Header />
      <EventForm addEvent={addEvent} />
      <ScheduledEvents events={events} />
      <AISuggestions />
    </div>
  );
}
export default App;