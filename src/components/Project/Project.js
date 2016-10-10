import React, { PropTypes } from 'react';

import './Project.css';

const Project = (props) => (
  <div className={`project ${props.styleName}`}>
    <div className="project__circle" />
    <div
      className="project__image"
      style={{'order': props.imageLeft ? 1 : 3}}
    />
    <div
      className="project__middle"
      style={{'transform': `scaleX(${props.imageLeft ? 1 : -1})`}}
    />
    <div
      className="project__box"
      style={{'order': props.imageLeft ? 3 : 1}}
    >
      <h1 className="project__box__header">
        { props.header }
      </h1>
      <div className="project__box__line" />
      <p className="project__box__text">
        { props.description }
      </p>
      <p className="project__box__subheader">
        Technology Used
      </p>
      { props.technology.map((technology, index) => (
        <p className="project__box__text" key={index}>
          { technology }
        </p>
      ))}
    </div>
  </div>
);

Project.propTypes = {
  header: PropTypes.string,
  imageLeft: PropTypes.bool,
  description: PropTypes.string,
  technology: PropTypes.array
}

export default Project;
