import React, { PropTypes } from 'react';

import './DynamicGreeter.scss';

const DynamicGreeter = (props) => (
  <section className="DynamicGreeter">
    <p className="DynamicGreeter__text">
      Hi! I'm Kevin, a full stack developer <br></br> who loves
      <span className="DynamicGreeter__text--highlight">
        { props.currentHobby }
      </span>
    </p>
  </section>
);

DynamicGreeter.propTypes = {
    currentHobby: PropTypes.string.isRequired
};

export default DynamicGreeter;
