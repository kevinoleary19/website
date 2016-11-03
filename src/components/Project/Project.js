import React, { PropTypes } from 'react';

import './Project.scss';
import { isMobile } from '../../utils/browser';

const Project = ({ imageLeft, header, style, description, technology, image}) => {
  const mobile = (
    <div className={`Project ${style}`}>
      <img className="Project__image" src={image.src} alt={image.alt}/>
      <div className="Project__summary">
        <h1 className="Project__header">
          { header }
        </h1>
        <p className="Project__text Project__text--summary">
          { description }
        </p>
        <p className="Project__subheader">
          Technology Used
        </p>
        { technology.map((technology, index) => (
          <p className="Project__text" key={index}>
            { technology }
          </p>
        ))}
      </div>
      <div className="Project__line" />
    </div>
  );

  const desktop = (
    <div className={`Project ${style}`}>
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

  return isMobile ? mobile : desktop;
};

Project.propTypes = {
  header: PropTypes.string,
  imageLeft: PropTypes.bool,
  description: PropTypes.string,
  technology: PropTypes.array,
  src: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
}

export default Project;
