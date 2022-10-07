import React, { useEffect } from 'react';
import logo from './logo.svg';
import init, { add } from "ironcc-wasm";
import './App.css';

function App() {
  useEffect(() => { init().then(() => alert("wasm is ready!")) }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => console.log(add(1, 2))} >Click to alert</button>
      </header>
    </div>
  );
}

export default App;
