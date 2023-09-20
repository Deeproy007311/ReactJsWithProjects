import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function addValue() {
    if (count > 19) {
      setCount(20);
    }
    else{
      setCount(count + 1);
    }
      
  }
  function removeValue() {
    if (count < 1) {
      setCount(0);
    }
    else{
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
