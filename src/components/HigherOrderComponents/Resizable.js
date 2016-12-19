import { PROJECT_PAGE_BREAKPOINT } from '../../constants';
import React, { Component } from 'react';

const Resizable = (ComposedComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.onWindowResize());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.onWindowResize());
  }

  maybeForceUpdate() {
    const { windowWidth } = this.state;
    const newWidth = window.innerWidth;
    if (windowWidth) {
      const mobileToDesktop = windowWidth < PROJECT_PAGE_BREAKPOINT && newWidth > PROJECT_PAGE_BREAKPOINT;
      const desktopToMobile = windowWidth > PROJECT_PAGE_BREAKPOINT && newWidth < PROJECT_PAGE_BREAKPOINT;
      if (mobileToDesktop || desktopToMobile) {
          this.forceUpdate();
      }
    }
    this.setState({windowWidth: newWidth});
  }

  onWindowResize() {
    window.requestAnimationFrame(() => this.maybeForceUpdate());
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export default Resizable;
