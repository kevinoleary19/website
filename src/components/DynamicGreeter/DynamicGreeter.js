import React, { PropTypes } from 'react';

import './DynamicGreeter.css';

const DynamicGreeter = (props) => (
  <section className="dynamic-greeter">
    <p className="dynamic-greeter__text">
      Hi! I'm Kevin, a full stack developer <br></br> who loves
      <span className="dynamic-greeter__text--highlight">
        { props.currentHobby }
      </span>
    </p>
  </section>
);

DynamicGreeter.propTypes = {
    currentHobby: PropTypes.string.isRequired
};

export default DynamicGreeter;
