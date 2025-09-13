import React, { useState } from "react";

function EventForm() {
  const [event, setEvent] = useState({
    type: "",
    timing: "",
    time: "",
    food: "",
    date: "",
    place: "",
  });

  const [eventList, setEventList] = useState([]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!event.type || !event.date || !event.time || !event.place) {
      alert("Please fill all required fields!");
      return;
    }

    setEventList([...eventList, event]);

    setEvent({
      type: "",
      timing: "",
      time: "",
      food: "",
      date: "",
      place: "",
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const getTimeOptions = () => {
    let times = [];

    if (event.timing === "Morning") {
      times = [
        "06:00 AM",
        "07:00 AM",
        "08:00 AM",
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
      ];
    } else if (event.timing === "Evening") {
      times = ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"];
    } else if (event.timing === "Night") {
      times = ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"];
    }

    return times;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="type" value={event.type} onChange={handleChange}>
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Reception">Reception</option>
          <option value="Get Together">Get Together</option>
          <option value="Cradle Ceremony">Cradle Ceremony</option>
        </select>

        <select name="timing" value={event.timing} onChange={handleChange}>
          <option value="">Select Function Timing</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>

        <select
          name="time"
          value={event.time}
          onChange={handleChange}
          disabled={!event.timing}
        >
          <option value="">Select Time</option>
          {getTimeOptions().map((t, idx) => (
            <option key={idx} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select name="food" value={event.food} onChange={handleChange}>
          <option value="">Select Food Preference</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Mixed">Mixed</option>
        </select>

        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />

        <input
          type="text"
          name="place"
          placeholder="Enter Place"
          value={event.place}
          onChange={handleChange}
        />

        <button type="submit">Add Event</button>
      </form>

      <h3>Scheduled Events</h3>
      {eventList.length === 0 ? (
        <p>No events scheduled yet.</p>
      ) : (
        <ul>
          {eventList.map((ev, index) => (
            <li key={index}>
              A <b>{ev.type}</b> is planned in the <b>{ev.timing}</b> at{" "}
              <b>{ev.time}</b> with <b>{ev.food}</b> food on{" "}
              <b>{formatDate(ev.date)}</b> at <b>{ev.place}</b>.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default EventForm;