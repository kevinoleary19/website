import React, { Component, PropTypes } from 'react';

import './DynamicGreeter.css';

export default class DynamicGreeter extends Component {
  static propTypes = {
      currentHobby: PropTypes.string.isRequired
  }

  render() {
    const { currentHobby } = this.props;

    return (
      <section className="dynamic-greeter">
        <p className="dynamic-greeter__text">
          Hi! I'm Kevin, a full stack developer <br></br> who loves
          <span className="dynamic-greeter__text--highlight">
            { currentHobby }
          </span>
        </p>
      </section>
    );
  }
}
