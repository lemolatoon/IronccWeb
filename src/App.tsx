import React, { useEffect } from 'react';
import logo from './logo.svg';
import init, { preprocess_and_compile } from "ironcc-wasm";
import CompileForm from './components/compileForm';
import './App.css';

function App() {
  useEffect(() => { init() }, [])
  return (
    <div className="App">
      <header className="App-header">
        <CompileForm />
      </header>
    </div>
  );
}


export default App;
