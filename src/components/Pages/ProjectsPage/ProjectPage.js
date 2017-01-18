// @flow
import React from 'react';

import './ProjectPage.scss';
import { $Project } from 'types';
import { projects } from 'data';
import Project from 'components/Project/Project';
import Resizable from 'components/HigherOrderComponents/Resizable';

const ProjectPage = () => (
  <section className="ProjectPage">
    <div className="ProjectPage__divider" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--top" />
    <div className="ProjectPage__divider-box ProjectPage__divider-box--bottom" />
    {
      projects.map((project: $Project, index: number) =>
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

export default Resizable(ProjectPage);
