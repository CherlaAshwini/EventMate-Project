import React from "react";
import {
  FaHome,
  FaPlusCircle,
  FaUsers,
  FaMoneyBill,
  FaRobot,
  FaBell,
  FaUser,
} from "react-icons/fa";

const HomePage = () => {
  const events = [
    { name: "Birthday Party", date: "12 Oct, 2024" },
    { name: "Wedding Ceremony", date: "14 Nov, 2024" },
    { name: "Company Meeting", date: "20 Dec, 2024" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10 text-blue-600">EventMate</h2>
        <nav className="flex flex-col gap-6">
          <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaHome /> Dashboard
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaPlusCircle /> Add Event
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaUsers /> Guests
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaMoneyBill /> Budget
          </button>
          <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
            <FaRobot /> AI Suggestions
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <div className="flex items-center gap-6">
            <FaBell className="text-xl text-gray-600 cursor-pointer" />
            <FaUser className="text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Good Evening, Naveen!
        </h1>
        <p className="text-gray-600 mb-6">Ready to plan your next event?</p>

        {/* Events as Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {event.name}
              </h2>
              <p className="text-gray-500">{event.date}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
