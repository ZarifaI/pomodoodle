import React from 'react';
import './App.css';
import Timer from './components/Timer';
import DoodlePad from './components/DoodlePad';

function App() {
  return (
    <div className="app-container">
      <h1>Pomodoodle</h1>

      <div className="main-sections">
        <Timer />
        <DoodlePad />
      </div>

      <div className="button-grid">
        <button className="button-pink">Why Pomodoodle?</button>
        <button className="button-blue">🎵 Lo-fi Mode</button>
        <button className="button-red">💡 Focus Tips</button>
        <button className="button-mint">Focus Tips</button>
        <button className="button-purple">📚 Themes</button>
      </div>
    </div>
  );
}

export default App;
