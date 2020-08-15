import React, { Fragment } from 'react';
import '../styles/screens/projects.css';
import { PROJECTS, PROJECT_FILTER_BUTTONS } from '../constants/content.js';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const AboutMe = () => {
  return (
    <Fragment>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc' }}
      >
        I'm an experienced software engineer who is passionate about building
        tools to increase developer productivity and empower users to achieve
        more.
      </Typography>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc' }}
      >
        I'm currently a Full-Stack Engineer @ Salesforce and pursuing a Masters
        in Computer Science at Georgia Tech.
      </Typography>
    </Fragment>
  );
};

export const FeaturedArticles = () => {
  return (
    <Fragment>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc' }}
      >
        Hot of the Press ~ A couple of articles I've written about tech on
        Medium
      </Typography>
    </Fragment>
  );
};

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <AboutMe />
      <FeaturedArticles />
    </Container>
  );
};

export default Home;
