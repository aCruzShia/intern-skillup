import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <Header parentCount={count} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Click app
        </button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <div>Learn React</div>
        </a>
      </header>
    </div>
  )
}

export default App
