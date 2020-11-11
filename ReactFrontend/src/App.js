import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestuarantExample from './components/RestuarantDisplayExample';
import MapExample from './components/MapExample';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example code:
        </p>
		
		<div>
			<RestuarantExample/>
		</div>
		<div>
			<MapExample/>
		</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;