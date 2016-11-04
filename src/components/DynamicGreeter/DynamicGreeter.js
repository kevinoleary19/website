// @flow
import React from 'react';

import './DynamicGreeter.scss';

type Props = {
  currentHobby: string
};

const DynamicGreeter = ({currentHobby}: Props) => (
  <section className="DynamicGreeter">
    <p className="DynamicGreeter__text">
      Hi! I'm Kevin, a full stack developer <br></br> who loves
      <span className="DynamicGreeter__text--highlight">
        { currentHobby }
      </span>
    </p>
  </section>
);

export default DynamicGreeter;
