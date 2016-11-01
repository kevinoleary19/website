import React, { PropTypes } from 'react';

import './Project.scss';

const Project = ({styleName, description, header, imageLeft, technology}) => (
  <div className={`Project ${styleName}`}>
    <div className="Project__circle" />
    <div
      className="Project__image"
      style={{'order': imageLeft ? 1 : 3}}
    />
    <div
      className="Project__middle"
      style={{'transform': `scaleX(${imageLeft ? 1 : -1})`}}
    />
    <div
      className="Project__box"
      style={{'order': imageLeft ? 3 : 1}}
    >
      <h1 className="Project__box__header">
        { header }
      </h1>
      <div className="Project__box__line" />
      <p className="Project__box__text">
        { description }
      </p>
      <p className="Project__box__subheader">
        Technology Used
      </p>
      { technology.map((technology, index) => (
        <p className="Project__box__text" key={index}>
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
