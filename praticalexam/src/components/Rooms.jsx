import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setRooms)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
        Bookings Rooms
      </h2>
      {rooms.length === 0 ? (
        <p className="text-center text-gray-500">No rooms available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {r.name}
              </h3>
              <p className="text-gray-600">
                Type: <span className="font-medium">{r.type}</span>
              </p>
              <p className="text-gray-600">
                Price: <span className="font-medium">₹{r.price}</span> / night
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
