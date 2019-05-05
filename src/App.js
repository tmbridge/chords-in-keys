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
            TODO:
            <li>- SHow guess value in setence with green or red correct/incorrect</li>
                <li>- settings/config</li>
        </div>
        <SettingsContainer/>
    </div>
  );
}

export default App;
