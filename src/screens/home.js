import React, { Fragment } from 'react';
import '../styles/screens/projects.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { ARTICLES_WRITTEN } from '../constants/content';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

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

export const FeaturedProjects = () => {
  return (
    <Fragment>
      <Typography
        component='div'
        align='left'
        style={{ backgroundColor: '#cfe8fc' }}
      >
        Featured Work
      </Typography>
    </Fragment>
  );
};

export const FeaturedArticles = () => {
  const foo = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = foo();

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
      {ARTICLES_WRITTEN.map((articleWritten) => {
        return (
          <Card className={classes.root} key={articleWritten.title}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../assets/img/projects/unitTesting.png')}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom component='h2' align={'left'}>
                  {articleWritten.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  align={'left'}
                  component='p'
                >
                  {articleWritten.description}
                </Typography>

                <div>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                  <div>
                    Nathan Patnam
                    {articleWritten.date}
                    {articleWritten.length}
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Fragment>
  );
};

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <AboutMe />
      <FeaturedProjects />
      <FeaturedArticles />
    </Container>
  );
};

export default Home;
