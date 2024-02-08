import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(15)

  let addValue = () => {
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
  }

  let removeValue = () => {
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
    }
    
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={addValue}>
          Add Value: {counter}
        </button>
        <button onClick={removeValue}>
          Remove Value: {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
