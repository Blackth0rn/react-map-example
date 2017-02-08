import React, {PropTypes, Component} from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js';

export default class Map extends Component {
  render() {
    const selectedLocation = this.props.locations.find((location) => location.id === this.props.selected);
    return (
      <GoogleMapReact
        apikey="AIzaSyC5XzG6b2EksFJTlNqlPec946_zrF5zfaI"
        center={selectedLocation ? [selectedLocation.lat, selectedLocation.lng] : this.props.center}
        zoom={this.props.zoom}
      >
        {this.props.locations.map((location) => 
          <Marker key={location.id} lat={location.lat} lng={location.lng} location={location} selectLocation={this.props.selectLocation} selected={location.id === this.props.selected} />
        )}
      </GoogleMapReact>
    );
  }
}
Map.defaultProps = {
  center: [49.265878, -123.084637],
  zoom: 14,
  locations: [],
  selected: null,
};
Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  locations: PropTypes.array,
  selected: PropTypes.string,
};
