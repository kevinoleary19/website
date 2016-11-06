import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// const MatchAnimate = ComposedComponent => class extends Component {
//   constructor() {
//     super();
//     this.state = { data: null };
//   }
//   componentDidMount() {
//     this.setState({ data: 'Hello' });
//   }
//   render() {
//     return <ComposedComponent {...this.props} data={this.state.data} />;
//   }
// };

const MatchAnimate = (ComposedComponent) => (
  <ReactCSSTransitionGroup
    transitionName="page-transition"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
    <ComposedComponent {...this.props} />
  </ReactCSSTransitionGroup>
);
  // constructor(props) {
  //   super(props);
  // }

  // render() {
  //   return (
  //     <ComposedComponent {...this.props} />
  //   );
  // }

  // render() {
  //   return (
  //     <ReactCSSTransitionGroup
  //       transitionName="page-transition"
  //       transitionEnterTimeout={500}
  //       transitionLeaveTimeout={300}
  //     >
  //       <ComposedComponent {...this.props} />
  //     </ReactCSSTransitionGroup>
  //   );
  // }
// }

export default MatchAnimate;
