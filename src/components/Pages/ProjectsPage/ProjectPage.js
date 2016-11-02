import React from 'react';

import './ProjectPage.scss';
import { projects } from '../../../data/data';
import Project from '../../Project/Project';

const ProjectPage = () => (
  <section className="ProjectPage">
    <div className="ProjectPage__divider" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--top" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--bottom" />
    {
      projects.map((project, index) =>
        <Project
          styleName={project.class}
          description={project.description}
          header={project.header}
          imageLeft={index % 2 === 0}
          key={index}
          technology={project.technology}
        />
      )
    }
  </section>
);

export default ProjectPage;
