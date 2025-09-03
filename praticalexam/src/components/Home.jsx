import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white flex flex-col items-center px-4 py-10">
      {/* Top Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl text-dark m-3 font-bold mb-6">Welcome to VIT Hotel</h1>
        <div className="home-text">
          <p className="home-subtitle">
            Experience the perfect blend of comfort, elegance, and premium
            service. Whether you're here for business or relaxation, we ensure a
            luxurious stay.
          </p>
          <p className="home-description">
            Located in the heart of the city, VIT Hotel offers world-class
            amenities, 24/7 room service, and a peaceful atmosphere that makes
            you feel at home.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/bookings"
            className="bg-primary text-light font-semibold px-6 p-3 rounded list-style-none m-5"
          >
            My Bookings
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 max-w-4xl w-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80"
          alt="Hotel Lobby"
          className="w-full h-80 object-cover rounded-lg shadow-lg border border-white"
        />
      </div>

      {/* Highlights Section */}
      <div className="mt-12 max-w-4xl grid md:grid-cols-3 gap-6 text-left w-full">
        <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-dark mb-2">
            🛌 Comfortable Rooms
          </h3>
          <p className="text-sm text-gray-200 text-dark">
            Choose from Relax, Suite, or Standard rooms — all crafted for your
            comfort.
          </p>
        </div>  
        <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-dark">
            🍽️ In-Room Dining
          </h3>
          <p className="text-sm text-gray-200 text-dark">
            Order your favorite food anytime with our 24/7 in-room dining
            service.
          </p>
        </div>
        <div className="bg-blue-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-dark">
            📍 Prime Location
          </h3>
          <p className="text-sm  text-dark">
            Just 5 minutes from VIT campus and the central market — perfect for
            all guests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

