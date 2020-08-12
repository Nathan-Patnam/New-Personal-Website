import React, { useState } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS, PROJECT_FILTER_BUTTONS } from '../constants/content.js';
import Project from '../components/project';
import { Button, ButtonGroup } from '@material-ui/core';

const Projects = () => {
  const [projectToShow, setProjectsToShow] = useState(PROJECTS);

  const filterProjects = (filter) => {
    console.log(filter);
    let filteredProjects = PROJECTS;
    if (filter !== 'All') {
      filteredProjects = PROJECTS.filter((project) => {
        return project.type.indexOf(filter) > -1;
      });
    }
    setProjectsToShow(filteredProjects);
  };

  const PROJECT_FILTER_BUTTON = (
    <ButtonGroup
      size='large'
      color='primary'
      aria-label='large outlined primary button group'
    >
      {PROJECT_FILTER_BUTTONS.map((filterButtonTitle) => {
        return (
          <Button
            onClick={() => {
              filterProjects(filterButtonTitle);
            }}
            key={filterButtonTitle}
          >
            {filterButtonTitle}
          </Button>
        );
      })}
    </ButtonGroup>
  );

  return (
    <div>
      {PROJECT_FILTER_BUTTON}

      {projectToShow.map((projectToShow) => {
        return (
          <div key={projectToShow.title}>
            <Project props={projectToShow} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
