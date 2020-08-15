import React, { useState } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS, PROJECT_FILTER_BUTTONS } from '../constants/content.js';
import Project from '../components/project';
import { Button, ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Projects = () => {
  const [projectToShow, setProjectsToShow] = useState(PROJECTS);

  /**
   * Iterate through each of our projects and filter out and sorted
   * based off of what we have.
   *
   * @param filter - what we will filter the projects by
   */
  const filterProjects = (filter) => {
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
      <Grid container spacing={3}>
        {projectToShow.map((projectToShow) => {
          return (
            <Grid item xs={4} key={projectToShow.title}>
              <Project props={projectToShow} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Projects;
