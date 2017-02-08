import React, { PropTypes, Component } from 'react';

import Map from './Map';
import Nav from './Nav';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocation: null,
    };

    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation(id) {
    this.setState({selectedLocation: id});
  }

  render() {
    return (
      <div className="App">
        <div className="Map">
          <Map locations={this.props.locations} selected={this.state.selectedLocation} selectLocation={this.selectLocation}/>
        </div>
        <div className="Nav">
          <Nav locations={this.props.locations} selected={this.state.selectedLocation} selectLocation={this.selectLocation}/>
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  locations: [
    {
      id: 'location1',
      name: 'Semios',
      lat: 49.265878,
      lng: -123.084637
    },
    {
      id: 'location2',
      name: 'IUGO',
      lat: 49.272012,
      lng: -123.094584
    },
    {
      id: 'location3',
      name: 'The Foundation',
      lat: 49.264427,
      lng: -123.101026
    }
  ]
};
App.propTypes = {
  locations: PropTypes.array,
};

