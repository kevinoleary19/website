import React, { Component, PropTypes } from 'react';

import './Bar.css';

export default class Bar extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.number
  }

  render() {
    const {
      backgroundColor,
      height
    } = this.props;

    const barStyle = {
      backgroundColor,
      transform: `scaleY(${height})`
    }

    return (
      <section
        className="bar"
        style={barStyle}
      ></section>
    );
  }
}
