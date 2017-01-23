// @flow
import { connect } from 'react-redux';
import select from '../../state/selector';
import React, { Component } from 'react';

import './Bars.scss';
import type { $Bar } from 'types';

const Bars = ({bars}: {bars: Array<$Bar>}) => (
  <section className="Bars">
    {bars.map((bar: $Bar, index: number) =>
      <div
        className="Bars__bar"
        style={{
          backgroundColor: bar.color,
          transform: `scaleY(${bar.height})`
        }}
        key={index}
      ></div>
    )}
  </section>
);

export default connect(select)(Bars);
