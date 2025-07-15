import "./App.css";
import { Home } from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import Error from "./Pages/Error";
import Profile from "./Pages/Profile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";

const routePath = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adduser",
        element: <AddUser />,
      },
      {
        path: "/edituser/:id",
        element: <EditUser />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routePath} />
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/edituser" element={<EditUser/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

//  http://localhost:5173
