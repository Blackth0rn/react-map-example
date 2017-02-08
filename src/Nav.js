import React, { PropTypes, Component } from 'react';

import './Nav.css';

export default class Nav extends Component {
  render() {
    const locations = this.props.locations.map((location) => {
      return (
        <li
          key={location.id}
          className={(location.id === this.props.selected) ? "selected" : ""}
        >
          <a onClick={this.props.selectLocation.bind(null,location.id)}>{location.name}</a>
        </li>
      );
    });

    return (
      <nav className="Nav">
        <ul>
          {locations}
        </ul>
      </nav>
    );
  }
}
Nav.propTypes = {
  locations: PropTypes.array,
  selected: PropTypes.string,
  selectLocation: PropTypes.func,
};
Nav.defaultProps = {
  locations: [],
  selected: null,
}
