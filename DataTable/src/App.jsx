import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import AddItem from "./Pages/AddItem";
import EditItem from "./Pages/EditItem";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Item")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home items={items} searchTerm={searchTerm} setItems={setItems} />
            }
          />
          <Route path="/add-item" element={<AddItem setItems={setItems} />} />
          <Route
            path="/edit-item/:id"
            element={<EditItem items={items} setItems={setItems} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
