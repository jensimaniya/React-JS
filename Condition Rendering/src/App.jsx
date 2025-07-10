import { useState } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Condition from './Condition/Condition'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This Is Condition Rendering</h1>
    <Condition/>
    </>
  )
}

export default App