import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex align-items-start" style={{ height: "100vh" }}>
        <h1 className="text-info">firebase</h1>
      </div>
    </>
  );
}

export default App
