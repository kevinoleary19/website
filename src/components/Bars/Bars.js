// @flow
import React, { Component } from 'react';

import './Bars.scss';

type Bar = {
  color: string,
  height: number
}

type Props = {
  currentHobby: string
}

export default class Bars extends Component {
  props: Props;
  state: {
    bars: Array<Bar>
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      bars: this.createBars()
    };
  }

  componentWillReceiveProps(nextProps: Props) {
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
  modifyBars(newHobby: string) {
    const { bars }: {bars: Array<Bar>} = this.state;

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
      case 'Minimalism':
        generator = this.minimalismGenerator;
        break;
      default:
        generator = this.randomGenerator;
        break;
    }

    for (let i = 0; i < bars.length; i++) {
      const bar: Bar = bars[i];
      bar.height = generator(i);
    }
  }

  // height generators
  // ---------------------------------------------------------------------------
  landscapeGenerator(x: number) {
    return [96, 85, 85, 35, 35, 61, 89, 76, 76, 49, 107, 107, 60, 75][x];
  }

  investingGenerator(x: number) {
    return [12, 11, 17, 34, 25, 28, 45, 47, 67, 45, 51, 68, 83, 83][x];
  }

  minimalismGenerator(x: number) {
    return 35;
  }

  sinGenerator(x: number, numBars: number = 12) {
    const deviation = 35;
    const yOffset = 50;
    return Math.round(deviation * Math.sin(Math.PI * x / ((numBars - 1) / 2)) + yOffset);
  }

  statisticsGenerator(x: number) {
    return [0.5, 1, 2, 12, 35, 66, 90, 90, 66, 35, 12, 2, 1, 0.5][x];
  }

  randomGenerator(x: number) {
    return Math.round(Math.random() * 100);
  }
  // ---------------------------------------------------------------------------

  render() {
    return (
      <section className="Bars">
        {this.state.bars.map((bar: Bar, index: number) =>
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
  }
}
