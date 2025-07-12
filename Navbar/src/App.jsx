import { Children, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./Components/navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Profile from "./Pages/Profile";
import {createBrowserRouter,RouterProvider}from 'react-router-dom'

const routepath = createBrowserRouter([
  {
    path: "/",
    element: <NavScrollExample />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routepath} />
    </>
  );
}

export default App;
