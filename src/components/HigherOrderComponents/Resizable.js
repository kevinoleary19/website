import React, { Component } from 'react';

const Resizable = (ComposedComponent) => class extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => this.forceUpdate());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.forceUpdate());
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export default Resizable;
