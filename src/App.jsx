import React from 'react';
import TipCalculator from './components/TipCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/logo.svg" alt="Splitter" />
      </header>
      <TipCalculator />
    </div>
  );
}

export default App;
