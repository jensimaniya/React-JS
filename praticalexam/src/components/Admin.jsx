import React from 'react';

const Admin = () => (
  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-primary">
        Admin Panel
      </h2>
      <p className="text-lg text-center mb-12 m-3 text-primary">
        Manage bookings, rooms, and more with ease.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  m-3 lg:grid-cols-3 gap-6 m-3">
        <div className="bg-white  m-3 bg-opacity-20 p-6 rounded-lg shadow-lg hover:bg-opacity-30 transition">
          <h3 className="text-2xl font-semibold mb-4 text-primary  m-3">
            Bookings
          </h3>
          <p className="text-primary m-3">
            View and manage all hotel bookings.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg m-3 hover:bg-opacity-30 transition">
          <h3 className="text-2xl font-semibold mb-4 text-primary  m-3">
            Rooms
          </h3>
          <p className="text-primary  m-3">
            Manage room availability and details.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg m-3 shadow-lg hover:bg-opacity-30 transition">
          <h3 className="text-2xl font-semibold mb-4 text-primary  m-3">
            Users
          </h3>
          <p className="text-primary  m-3">
            Oversee user accounts and permissions.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Admin;
