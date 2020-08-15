import React, { useState } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS, PROJECT_FILTER_BUTTONS } from '../constants/content.js';
import Project from '../components/project';
import { Button, ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  const [projectToShow, setProjectsToShow] = useState(PROJECTS);

  return <div></div>;
};

export default Home;
