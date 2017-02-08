import React, {PropTypes, Component} from 'react';
import './Marker.css';

export default class Marker extends Component {
  render() {
    return (
      <div className={(this.props.selected) ? "marker selected" : "marker"}>
        <span onClick={this.props.selectLocation.bind(null,this.props.location.id)}>{this.props.location.name}</span>
      </div>
    );
  }
}
Marker.propTypes = {
  selected: PropTypes.bool,
  location: PropTypes.object,
  selectLocation: PropTypes.func,
};
Marker.defaultProps = {
  selected: false,
}
