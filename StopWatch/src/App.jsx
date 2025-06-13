import { useState } from 'react'
import Stopwatch from './assets/stopwatch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stopwatch/>
    </>
  )
}

export default App





  
