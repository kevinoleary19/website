import React, { Component, PropTypes } from 'react';

import Bars from '../../Bars/Bars';
import DynamicGreeter from '../../DynamicGreeter/DynamicGreeter';
import './HomePage.scss';

export default class HomePage extends Component {
  static propTypes = {
      currentHobby: PropTypes.string.isRequired
  }

  render() {
    return (
      <section className="HomePage">
        <DynamicGreeter
          className="HomePage__greeter"
          currentHobby={this.props.currentHobby}
        ></DynamicGreeter>
        <Bars
          currentHobby={this.props.currentHobby}
        ></Bars>
      </section>
    );
  }
}
