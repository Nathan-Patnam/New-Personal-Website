import React, { Fragment } from 'react';
import '../styles/screens/projects.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ContactForm from '../components/contact';
import ProfilePicture from '../assets/img/me/profile_picture.png';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ARTICLES_WRITTEN } from '../constants/content';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

import { _openLinkInNewTab } from '../helpers/helpers';

export const AboutMe = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={5}>
            <Typography align='left'>
              I'm an experienced software engineer who is passionate about
              building tools to increase developer productivity and empower
              users to achieve more.
            </Typography>
            <Typography align='left'>
              Currently a Full-Stack Engineer @Salesforce and pursuing a Masters
              in Computer Science at Georgia Tech.
            </Typography>
          </Box>

          <div>Some of my Previous Employers</div>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={ProfilePicture} />
        </Grid>
      </Grid>
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
  const styles = makeStyles({
    root: {
      maxWidth: 300,
      boxShadow: 'none',
    },
    media: {
      height: 160,
    },
    articleDescription: {
      height: 120,
    },
    title: {
      height: 50,
    },
    body: {
      padding: 0,
    },
  });
  const classes = styles();

  return (
    <Fragment>
      <Typography component='div' align='left'>
        Recent Medium Articles
      </Typography>
      <Grid container justify='center'>
        {ARTICLES_WRITTEN.map((articleWritten) => {
          const openMediumArticleInNewTab = () => {
            _openLinkInNewTab(articleWritten.viewLink);
          };

          return (
            <Grid item key={articleWritten.title} sm={6} md={6} lg={3} xl={3}>
              <Grid container justify='center' alignItems='center'>
                <Card className={classes.root}>
                  <CardActionArea onClick={openMediumArticleInNewTab}>
                    <CardMedia
                      className={classes.media}
                      image={require('../assets/img/projects/unitTesting.png')}
                      title='Contemplative Reptile'
                    />
                    <CardContent className={classes.body}>
                      <Typography
                        gutterBottom
                        className={classes.title}
                        component='h2'
                        align={'left'}
                      >
                        {articleWritten.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        align={'left'}
                        component='p'
                        className={classes.articleDescription}
                      >
                        {articleWritten.description}
                      </Typography>

                      <Grid container>
                        <Grid item xs={3}>
                          <Avatar
                            alt='Headshot of Nathan Patnam smiling'
                            src='/static/images/avatar/1.jpg'
                          />
                        </Grid>

                        <Grid item xs={9}>
                          <Typography variant='subtitle2' align={'left'}>
                            Nathan Patnam
                            <br />
                            {articleWritten.date}
                            {articleWritten.length}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <AboutMe />
      <FeaturedProjects />
      <FeaturedArticles />
      <ContactForm />
    </Container>
  );
};

export default Home;
