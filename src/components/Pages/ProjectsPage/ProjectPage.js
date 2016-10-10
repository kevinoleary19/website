import React from 'react';

import './ProjectPage.css';
import { projects } from '../../../data/data';
import Project from '../../Project/Project';


const ProjectPage = () => (
  <section className="project-page">
    <div className="project-page__divider" />
    <div className="project-page__divider-box--top" />
    <div className="project-page__divider-box--bottom" />
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
