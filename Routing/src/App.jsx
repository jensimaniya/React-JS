import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home"
import { Component } from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import Profile from './Pages/Profile';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Component />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
