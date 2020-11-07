import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestuarantExample from './components/RestuarantDisplayExample';
import MapExample from './components/MapExample';
import Dropdown from './Components/Dropdown';

const container = {
  display: 'flex',
  flexDirection: 'column',
  width: '200vw',
  height: '10vh',
  justifyContent: 'center',
  alignItems: 'center'
}
const options = [
  { key: 'key-1', text: 'All' },
  { key: 'key-2', text: 'Chinese' }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example code:
        </p>

		<div style={container}>
      		Example Dropdown <Dropdown options={options} />
    	</div>

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