// @flow
import React from 'react';

import './Project.scss';
import { isMobile } from '../../utils/browser';
import { Technology } from '../../types/types';
import GithubIcon from '../shared/GithubIcon';
import WebLinkIcon from '../shared/WebLinkIcon';

type Props = {
  imageLeft: boolean,
  last: boolean,
  header: string,
  description: string,
  technology: Technology,
  src: string,
  githubLink?: string,
  webLink?: string
}

const Project = ({imageLeft, last, header, description, technology, src, githubLink, webLink}: Props) => {

  const headerLinkIcon = webLink ? (
    <a
      className="Project__header-icon"
      href={webLink}
      target="blank"
    >
      <WebLinkIcon />
    </a>
  ) : null;

  const headerGithubIcon = githubLink ? (
    <a
      className="Project__header-icon"
      href={githubLink}
      target="blank"
    >
      <GithubIcon />
    </a>
  ) : null;

  const mobile = (
    <div className="Project">
      <img className="Project__image" src={src} alt={header}/>
      <div className="Project__summary">
        <h1 className="Project__header">
          { header }
          { headerLinkIcon }
          { headerGithubIcon }
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
    <div
      className="Project"
      style={{'marginBottom': last ? '180px' : ''}}
    >
      <div className="Project__circle" />
      <img
        className="Project__image"
        style={{'order': imageLeft ? 1 : 3}}
        src={src}
        alt={header}
      />
      <div
        className="Project__middle"
        style={{'transform': `scaleX(${imageLeft ? 1 : -1})`,
                'marginLeft': imageLeft ? '10px' : '',
                'marginRight': imageLeft ? '' : '10px'}}
      >
        <div className="Project__middle__frame" />
      </div>
      <div
        className="Project__description"
        style={{'order': imageLeft ? 3 : 1}}
      >
        <h1 className="Project__header">
          { header }
          { headerLinkIcon }
          { headerGithubIcon }
        </h1>
        <div className="Project__line" />
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
    </div>
  );

  return isMobile ? mobile : desktop;
};

export default Project;
