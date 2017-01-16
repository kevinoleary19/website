// @flow
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { changeHobby } from './redux/actions';
import Bars from './subcomponents/Bars/Bars';
import DynamicGreeter from './subcomponents/DynamicGreeter/DynamicGreeter';
import './HomePage.scss';

type Props = {
  dispatch: any
};

class HomePage extends Component {
  changeInterval: number;
  props: Props;

  constructor() {
    super();
    const initialWait = 1600;
    setTimeout(() => this.changeHobby(), initialWait);
    const intervalStart = initialWait + 3500;
    this.changeInterval = setInterval(() => this.changeHobby(), intervalStart);
  }

  componentWillUnmount() {
    clearInterval(this.changeInterval);
  }

  changeHobby() {
    this.props.dispatch(changeHobby);
  }

  render() {
    return (
      <section className="HomePage">
        <DynamicGreeter className="HomePage__greeter"/>
        <Bars/>
      </section>
    );
  }
};

export default connect(null)(HomePage);
