import React, { Component } from 'react';

import  Bars from '../../Bars/Bars';
import DynamicGreeter from '../../DynamicGreeter/DynamicGreeter';
import './HomePage.css';

export default class HomePage extends Component {
  constructor() {
    super();
    this.hobbies = ['Music', 'Investing', 'Statistics', 'Landscapes'];
    this.state = {
      currentHobby: this.hobbies[0]
    };
    this.changeInterval = setInterval(() => this.changeHobby(), 4500);
  }

  componentWillUnmount() {
    clearInterval(this.changeInterval);
  }

  changeHobby() {
    const hobbies = this.hobbies;
    const currentHobby = this.state.currentHobby;
    const index = hobbies.indexOf(currentHobby);

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
    return (
      <section className="home-page">
        <DynamicGreeter
          className="home-page__greeter"
          currentHobby={this.state.currentHobby}
        ></DynamicGreeter>
        <Bars
          currentHobby={this.state.currentHobby}
        ></Bars>
      </section>
    );
  }
}
