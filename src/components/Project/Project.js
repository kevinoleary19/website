// @flow
import React from 'react';

import './Project.scss';
import { isMobile } from '../../utils/browser';
import { ProjectType, Technology } from '../../types/types';

const Project = ({ imageLeft, header, style, description, technology, src}: ProjectType) => {
  const mobile = (
    <div className={`Project ${style}`}>
      <img className="Project__image" src={src} alt={header}/>
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
        { technology.map((technology: Technology, index: number) => (
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
        { technology.map((technology: Technology, index: number) => (
          <p className="Project__box__text" key={index}>
            { technology }
          </p>
        ))}
      </div>
    </div>
  );

  return isMobile ? mobile : desktop;
};

export default Project;
