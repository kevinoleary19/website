import React from 'react';

import './TestPage.scss';

const TestPage = () => (
  <div className="TestPage">
    <div className="container">
      <div className="layer layer--1">
        <div className="layer__point layer__point--1">
          <div className="layer-line" />
        </div>
      </div>
      <div className="layer layer--2">
        <div className="layer__point layer__point--2" />
      </div>
      <div className="layer" />
    </div>
    <div className="container">
      <div className="layer layer--1 layer--active">
        <div className="layer__point layer__point--1">
          <div className="layer-line" />
        </div>
        <div className="layer proxy-layer layer--1" />
      </div>
      <div className="layer layer--2 layer--active">
        <div className="layer__point layer__point--2" />
      </div>
      <div className="layer layer--3 layer--active" />
    </div>
  </div>
);

export default TestPage;
