// @flow
import React from 'react';

import './ProjectPage.scss';
import { ProjectType } from '../../../types/types';
import { projects } from '../../../data/data';
import Project from '../../Project/Project';

const ProjectPage = () => (
  <section className="ProjectPage">
    <div className="ProjectPage__divider" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--top" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--bottom" />
    {
      projects.map((project: ProjectType, index: number) =>
        <Project
          key={index}
          imageLeft={index % 2 === 0}
          last={index === projects.length - 1}
          {...project}
        />
      )
    }
  </section>
);

export default ProjectPage;
