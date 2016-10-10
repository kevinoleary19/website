import React, { Component, PropTypes } from 'react';

import './Bars.css';


export default class Bars extends Component {
  static propTypes = {
      currentHobby: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      bars: this.createBars()
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentHobby) {
      this.modifyBars(nextProps.currentHobby);
    }
  }

  createBars() {
    const numBars = 14;
    let bars = [];
    const bStartValue = 125;
    const bEndValue = 81;
    const difference = bStartValue - bEndValue;

    for (let i = 0; i < numBars; i++) {
      bars.push({
        color: `RGB(226,94,${Math.round(bStartValue - (i * (difference / numBars)))})`,
        height: this.sinGenerator(i, numBars)
      });
    }
    return bars;
  }

  // state management
  // ---------------------------------------------------------------------------
  modifyBars(newHobby) {
    const { bars } = this.state;

    let generator;
    switch (newHobby) {
      case 'Landscapes':
        generator = this.landscapeGenerator;
        break;
      case 'Investing':
        generator = this.investingGenerator;
        break;
      case 'Music':
        generator = this.sinGenerator;
        break;
      case 'Statistics':
        generator = this.statisticsGenerator;
        break;
      default:
        generator = this.randomGenerator;
        break;
    }

    for (let i = 0; i < bars.length; i++) {
      const bar = bars[i];
      bar.height = generator(i);
    }
  }


  // height generators
  // ---------------------------------------------------------------------------
  landscapeGenerator(x) {
    return [75, 60, 107, 107, 49, 76, 76, 89, 61, 35, 35, 85, 85, 96][x];
  }

  investingGenerator(x) {
    return [12, 11, 17, 34, 25, 28, 45, 47, 67, 45, 51, 68, 83, 83][x];
  }

  sinGenerator(x, numBars = 12) {
    const deviation = 35;
    const yOffset = 50;
    return Math.round(deviation * Math.sin(Math.PI * x / ((numBars - 1) / 2)) + yOffset);
  }

  statisticsGenerator(x, distribution) {
    return [0.5, 1, 2, 12, 35, 66, 90, 90, 66, 35, 12, 2, 1, 0.5][x];
  }

  randomGenerator(x) {
    return Math.round(Math.random() * 100);
  }
  // ---------------------------------------------------------------------------

  render() {
    return (
      <section className="bars">
        {this.state.bars.map((bar, index) =>
          <div
            className="bar"
            style={{
              backgroundColor: bar.color,
              transform: `scaleY(${bar.height})`
            }}
            key={index}
          ></div>
        )}
      </section>
    );
  }
}
