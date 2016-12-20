// @flow
import React, { Component } from 'react';

import Bars from '../../Bars/Bars';
import DynamicGreeter from '../../DynamicGreeter/DynamicGreeter';
import './HomePage.scss';

// import MatchAnimate from '../../HigherOrderComponents/MatchAnimate';

export default class HomePage extends Component {
  changeInterval: number;
  hobbies: Array<string>;
  state: {
    currentHobby: string
  }

  constructor() {
    super();
    this.hobbies = ['Music', 'Investing', 'Minimalism', 'Statistics', 'Landscapes'];
    this.state = {
      currentHobby: 'Orchestration'
    };
    const initialWait = 1800;
    setTimeout(() => this.changeHobby(), initialWait);
    const intervalStart = initialWait + 3500;
    this.changeInterval = setInterval(() => this.changeHobby(), intervalStart);
  }

  componentWillUnmount() {
    clearInterval(this.changeInterval);
  }

  changeHobby() {
    const hobbies = this.hobbies;
    const currentHobby = this.state.currentHobby;
    const index: number = hobbies.indexOf(currentHobby);

    let newHobby;
    if (index + 1 === hobbies.length) {
      newHobby = hobbies[0];
    } else {
      newHobby = hobbies[index + 1];
    }
    this.setState({
      currentHobby: newHobby
    });
  }

  render() {
    const { currentHobby } = this.state;

    return (
      <section className="HomePage">
        <DynamicGreeter
          className="HomePage__greeter"
          currentHobby={currentHobby}
        ></DynamicGreeter>
        <Bars
          currentHobby={currentHobby}
        ></Bars>
      </section>
    );
  }
};
