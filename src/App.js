import React from 'react';
import SentenceContainer from './components/Sentence/SentenceContainer.js'
import SettingsContainer from './components/SettingsContainer.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SentenceContainer/>
      </header>
        <div>
        </div>
        <SettingsContainer/>
    </div>
  );
}

export default App;
