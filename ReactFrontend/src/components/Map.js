import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Sidebar from "react-sidebar";
import axios from 'axios';

class Map extends React.Component {
	
	constructor(props) {
	super(props);
	this.state = {
	    containerStyle:  {
			width: '50rem',
			height: '50rem',
		},
			center: {
			  lat: 41.257160,
			  lng: 	-95.995102
			},
			zoom: 12,
	      	isLoaded: false,
	      	geolocations: [],
		  	sidebarOpen: false,
			sidebarContent: "<b>Sidebar content</b>",
	    };
		this.apiKey = "AIzaSyDAgWm9CAqvZ34543D-KMXNEu9RW-fZ1lQ";
		    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

	}
	
	async onSetSidebarOpen(open, placeid) {
		console.log("tesssst")
		console.log(placeid)
		if (placeid == undefined) {
			this.setState({
            sidebarOpen: false
})
		} else {
			const [response] = await Promise.all([axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json",
		{
			params: {
				place_id: placeid,
				key: this.apiKey
			},
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		})])
		
		const whatever = await axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo",
		{
			params: {
				photoreference: response.data.result.photos[0].photo_reference,
				key: this.apiKey,
				maxwidth: 400,
				maxheight: 400
			},
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			responseType: 'blob'
		})
	      .then(
	        (result) => {
				console.log("asdf");
				console.log(response);
				this.setState({
            sidebarOpen: open,
            sidebarContent:  <div><img src={`${URL.createObjectURL(result.data)}`} class="center"/>
	 			<p><h3>{response.data.result.name}</h3>
	 			Rating Average: {response.data.result.rating} <br/>
	 			<h4>Reviews:</h4> 
				Author: {response.data.result.reviews[0].author_name} <br/> 
				Rating: {response.data.result.reviews[0].rating} <br/> 
				Date posted: {response.data.result.reviews[0].relative_time_description} <br/> 
				<div class="wrap">Review: {response.data.result.reviews[0].text} </div></p></div>
          });
			},  
			(error) => {
	          console.log("Error");
			  console.log(error);
	        }
	)
		}
		
	
  }
  componentDidMount() {
		fetch("https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJSxRju7qPk4cRGjqP-_ShyDo&key=" + this.apiKey)
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	this.geolocations = result.results;
				this.setState({
            		isLoaded: true,
            		geolocations: result
          		});
	        },
	        (error) => {
	          console.log("Error");
			  console.log(error);
	        }
      	)
	}
	
	render() {
		const { containerStyle, center, zoom, isLoaded, geolocations } = this.state;
		if (!isLoaded) {
      		return <div>Loading...</div>;
    	} else {
	  		return (
	    	<LoadScript
	     	 	googleMapsApiKey={this.apiKey}
				mapIds={["b2142da1345959e7"]}
	  	  	>
			<Sidebar
        		sidebar={this.state.sidebarContent}
        		open={this.state.sidebarOpen}
        		onSetOpen={this.onSetSidebarOpen}
        		styles={{ sidebar: { background: "white" } }}
      		>
      		</Sidebar>
	      	<GoogleMap
	        	mapContainerStyle={containerStyle}
	        	center={center}
	        	zoom={zoom}
				clickableIcons={false}
	      		>
	        	{/* Child components, such as markers, info windows, etc. */
				<div>
					<Marker position={{lat: geolocations.results[0].geometry.location.lat, 
					lng: geolocations.results[0].geometry.location.lng}}
				 	onClick = {() => {this.onSetSidebarOpen(true, "ChIJSxRju7qPk4cRGjqP-_ShyDo")}} />
				
					<Marker position={{lat: 41.3439047, 
					lng: -95.9850721}}
				 	onClick = {() => {this.onSetSidebarOpen(true, "ChIJy1dqY9-Tk4cRWRoSPXDYoOo")}} />
				</div>
				}
	        <></>
	      </GoogleMap>
	    </LoadScript>
	  )
	}
	}
	}

export default Map;