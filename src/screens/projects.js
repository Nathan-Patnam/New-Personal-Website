import React, { useState } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS } from '../constants/content.js';
import Project from '../components/project';

const Projects = () => {
  const [projectToShow, setProjectsToShow] = useState(PROJECTS);

  return (
    <div>
      <div></div>

      {projectToShow.map((projectToShow) => {
        return (
          <div key={projectToShow.name}>
            <Project props={projectToShow} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
