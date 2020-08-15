import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import NoteIcon from '@material-ui/icons/Note';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { ReactComponent as MediumIcon } from '../assets/img/icons/medium.svg';
import { SvgIcon } from '@material-ui/core';

import { FOOTER_ICONS } from '../constants/content';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Icon = ({ type }) => {
  switch (type) {
    case 'Linkedin':
      return <LinkedInIcon />;
    case 'GitHub':
      return <GitHubIcon />;
    case 'Medium':
      return <SvgIcon component={MediumIcon} viewBox='0 0 600 476.6' />;
    case 'Email':
      return <EmailIcon />;
    case 'Resume':
      return <NoteIcon />;
    case 'Youtube':
      return <YouTubeIcon />;
    case 'Calendly':
      return <EventIcon />;
    default:
      return null;
  }
};

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Follow Me On:
        <div>
          {FOOTER_ICONS.map((footerIcon) => {
            return <Icon type={footerIcon.type} key={footerIcon.type} />;
          })}
        </div>
      </Typography>
    </footer>
  );
};

export default Footer;
