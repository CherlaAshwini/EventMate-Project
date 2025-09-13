import React from "react";
import "./App.css";
import Header from "./components/Header";
import EventForm from "./components/EventForm";

function App() {
  return (
    <div className="App">
      {/* Top Header */}
      <Header />

      {/* Main Section */}
      <main>
        <h2>Plan Your Event</h2>
        <EventForm />
      </main>
    </div>
  );
}

export default App;