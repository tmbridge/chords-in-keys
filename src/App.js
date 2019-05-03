import React from 'react';
import SentenceContainer from './components/Sentence/SentenceContainer.js'
import ConfigurationContainer from './components/Configuration/ConfigurationContainer.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className={"App-header"}>
          <SentenceContainer/>

      </header>
        {/*TODO: Question: How do these App-{tag} classes work?*/}
        <body className="App-body">
            <ConfigurationContainer/>
        </body>
    </div>
  );
}

export default App;
