import React from 'react';

class RestuarantExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      restuarants: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/restaurants/findAll/Chinese")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            restuarants: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, restuarants } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {restuarants.map(RestaurantEntity => (
            <li key={RestaurantEntity.name}>
              Restaurant Name: {RestaurantEntity.name}, Restaurant Category: {RestaurantEntity.category}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default RestuarantExample;