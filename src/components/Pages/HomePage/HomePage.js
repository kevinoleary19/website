import React, { Component, PropTypes } from 'react';

import Bars from '../../Bars/Bars';
import DynamicGreeter from '../../DynamicGreeter/DynamicGreeter';
import './HomePage.css';

export default class HomePage extends Component {
  static propTypes = {
      currentHobby: PropTypes.string.isRequired
  }

  render() {
    return (
      <section className="home-page">
        <DynamicGreeter
          className="home-page__greeter"
          currentHobby={this.props.currentHobby}
        ></DynamicGreeter>
        <Bars
          currentHobby={this.props.currentHobby}
        ></Bars>
      </section>
    );
  }
}
