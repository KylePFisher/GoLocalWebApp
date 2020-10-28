import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestuarantExample from './components/RestuarantDisplayExample';
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

<select id="test" name="test">
     <option value="test1">All</option>
     <option value="test2">Restaurant</option>
     <option value="Other">Other</option>
</select>

		<div>
			<RestuarantExample/>
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