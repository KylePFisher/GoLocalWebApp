import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestuarantExample from './components/RestuarantDisplayExample';
import MapExample from './components/MapExample';


function App() {
  return (
    <div className="App">
      <header className="App-header">
		<div>
			<MapExample/>
		</div>
      </header>
    </div>
  );
}

export default App;
