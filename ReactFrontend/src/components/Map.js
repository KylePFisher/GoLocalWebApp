import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Navbar } from 'react-bootstrap';
import Sidebar from "react-sidebar";
import axios from 'axios';
import Dropdown from './Dropdown';

class Map extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			containerStyle:  {
				width: '50rem',
				height: '50rem',
			},
			containerLeft: {
				width: '400px',
				float: 'left',
				height: '100px'
			},
			containerRight: {
				width: '400px',
				float: 'right',
				height: '100px'
			},
			ids: [],
			idsEmpty: true,
			marker: [],
			primary: [],
			secondary: [],
			catOptions: [],
			subOptions: [
				{key: 'All', text: 'All'},
			],
			category: 'All',
			category2: 'All',
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


	change(event){
		this.setState({category: event.target.value});
		this.setState({subOptions: []})
		fetch("/getSubCategories?primary=" + event.target.value)
			.then(res => res.json())
			.then(
				(result) => {
					var {subOptions} = this.state
					subOptions = result.map((item) =>
						subOptions.push({key: item, text: item}));
					this.setState({secondary: result})
				},
				(error) => {
					console.log("Error");
					console.log(error);
				}
			)
	}

	change2(event){
		this.setState({category2: event.target.value});
		this.setState({ids: []})
		this.setState({idsEmpty: true})
	}

	render() {
		const { containerStyle, containerLeft, containerRight, center, zoom, isLoaded, category, category2, geolocations } = this.state;
		var {subOptions, catOptions, ids} = this.state;
		let marker = []
		if (this.state.idsEmpty){
			fetch("/getByCategory?category=" + category + "," + category2)
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({ids: result})
					},
					(error) => {
						console.log("Error");
						console.log(error);
					}
				)
			this.setState({idsEmpty: false})
		}
		// if (this.state.idsEmpty){
		// 	fetch("/getByCategory?category=" + category + "," + category2)
		//   .then(res => res.json())
		//   .then(
		//     (result) => {
		// 		this.setState({ids: result})
		//     },
		//     (error) => {
		//       console.log("Error");
		// 	  console.log(error);
		//     }
		// )
		// 	this.setState({idsEmpty: false})
		// }

		if (geolocations.results !== undefined) {
			marker.push(<Marker position={{
				lat: geolocations.results[0].geometry.location.lat,
				lng: geolocations.results[0].geometry.location.lng
			}}
								onClick={() => {
									this.onSetSidebarOpen(true, "ChIJSxRju7qPk4cRGjqP-_ShyDo")
								}}/>);
			marker.push(<Marker position={{
				lat: 41.3439047,
				lng: -95.9850721
			}}
								onClick={() => {
									this.onSetSidebarOpen(true, "ChIJy1dqY9-Tk4cRWRoSPXDYoOo")
								}}/>);
		}

		if(catOptions.length == 0){
			fetch("/getPrimaryCategories")
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({
							primary: result
						});
					},
					(error) => {
						console.log("Error");
						console.log(error);
					}
				)
			catOptions = this.state.primary.map((item) =>
				catOptions.push({key: item, text: item}));
		}

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
						styles={{  sidebar: {
								position: "fixed",
								background: "white"
							},
							root: {
								position: "undefined"
							},
							content: {
								position: "undefined",
								top: "undefined",
								left: "undefined",
								right: "undefined",
								bottom: "undefined"
							} }}
					>
					</Sidebar>

					<Navbar bg="light" expand="lg">
						<Navbar.Collapse id="basic-navbar-nav">
							<div style={containerLeft}>
								<label for="catergorySelect"> Category: </label>
								<Dropdown id="categorySelect" onChange={this.change.bind(this)} options={catOptions} />
							</div>

							<div style={containerRight}>
								<label for="subCatergorySelect"> Subcategory: </label>
								<Dropdown id="subCategorySelect" onChange={this.change2.bind(this)} options={subOptions} />
							</div>
						</Navbar.Collapse>
					</Navbar>
					{console.log(ids)}
					{/*sidebar*/}

					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={zoom}
						clickableIcons={false}
					>
						{/* Child components, such as markers, info windows, etc. */
							<div>

								{marker}

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