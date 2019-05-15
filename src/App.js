import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Income" className="income-input" />
        <button type="button" className="calculate-btn">
          Calculate
        </button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
