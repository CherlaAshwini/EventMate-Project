import React from "react";
import "./App.css";
import Header from "./components/Header";
import EventForm from "./components/EventForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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