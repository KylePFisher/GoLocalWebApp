import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Dropdown from './Dropdown';

class MapExample extends React.Component {
	
	constructor(props) {
				super(props);
		 this.state = {
	      containerStyle:  {
		  width: '400px',
		  height: '400px',
		},
		containerLeft: {
		  width: '200px',
		  float: 'left',
		  height: '100px'
		},
		containerRight: {
		  width: '200px',
		  float: 'right',
		  height: '100px'
		},
		options: [
		  { key: 'All', text: 'All' },
		  { key: 'Chinese', text: 'Chinese' }
		],
		category: 'nothing',
		category2: 'nothing',
		center: {
		  lat: 41.257160,
		  lng: 	-95.995102
		},
	      isLoaded: false,
	      geolocations: []
	    };
		this.apiKey = "AIzaSyDAgWm9CAqvZ34543D-KMXNEu9RW-fZ1lQ";
		}
	
  componentDidMount() {
		fetch("https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJSxRju7qPk4cRGjqP-_ShyDo&key=" + this.apiKey)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.geolocations = result.results;
				console.log("Success");
				console.log(result);
				console.log(this.geolocations);
				this.setState({
            isLoaded: true,
            geolocations: result
          });
				console.log(this.state.geolocations);
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          console.log("Error");
			  console.log(error);
	        }
      	)
	}
	
	change(event){
	this.setState({category: event.target.value});
}
change2(event){
	this.setState({category2: event.target.value});
}
	
	render() {
		const { containerStyle, containerLeft, containerRight, options, center, isLoaded, geolocations } = this.state;
/*		console.log("TEST");
		console.log(this.geoLocations);
		console.log(this.isLoaded);*/
		console.log("TEST")
		console.log(geolocations)
		if (!isLoaded) {
      		return <div>Loading...</div>;
    	} else {
	  return (
	    <LoadScript
	      googleMapsApiKey={this.apiKey}
		  mapIds={["b2142da1345959e7"]}
	    >

			<div style={containerLeft}>
				<Dropdown id="categorySelect" onChange={this.change.bind(this)} options={options} />
			</div>
			<div style={containerRight}>
				<Dropdown id="subCategorySelect" onChange={this.change2.bind(this)} options={options} />
			</div>
			<p>{this.state.category} and {this.state.category2}</p>
			
	      <GoogleMap
	        mapContainerStyle={containerStyle}
	        center={center}
	        zoom={10}
			clickableIcons={false}
	      >
	        { /* Child components, such as markers, info windows, etc. */
				<Marker position={{lat: geolocations.results[0].geometry.location.lat, lng: geolocations.results[0].geometry.location.lng}} />
			}
	        <></>
	      </GoogleMap>
	    </LoadScript>
	  )
	}
	}
}
export default MapExample;