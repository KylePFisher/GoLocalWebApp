import React from 'react';
import './css/MainPage.css';
import Map from './Map';

function MainPage() {
  return (
	<div className="App">
		<header className="App-header">
			GoLocal
		</header>
		<div className="App-body">
 			
			<div>
				<Map/>
			</div>
      	</div>
	</div>
  );
}

export default MainPage;
