import React, { useState } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS, PROJECT_FILTER_BUTTONS } from '../constants/content.js';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc' }}
      >
        I'm an experienced software engineer who has a passion for building
        tools to increase developer productivity as well as .
      </Typography>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
      >
        Currently I'm, a Full-Stack Engineer @ Salesforce and pursuing a Masters
        in Computer Science at Georgia Tech.
      </Typography>
    </React.Fragment>
  );
};

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <AboutMe />
    </Container>
  );
};

export default Home;
