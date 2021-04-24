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
import { IconButton } from '@material-ui/core';

import { _openLinkInNewTab } from '../helpers/helpers';

import { FOOTER_ICONS } from '../constants/content';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const Icon = ({ type, link }) => {
  const openLinkInNewTab = () => {
    _openLinkInNewTab(link);
  };

  switch (type) {
    case 'Linkedin':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={LinkedInIcon}
          color={'inherit'}
        />
      );
    case 'GitHub':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={GitHubIcon}
          color={'inherit'}
        />
      );
    case 'Medium':
      return (
        <IconButton
          style={{ width: 24, height: 24 }}
          onClick={openLinkInNewTab}
          component={MediumIcon}
          color={'inherit'}
        />
      );
    case 'Email':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={EmailIcon}
          color={'inherit'}
        />
      );
    case 'Resume':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={NoteIcon}
          color={'inherit'}
        />
      );
    case 'Youtube':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={YouTubeIcon}
          color={'inherit'}
        />
      );
    case 'Calendly':
      return (
        <IconButton
          onClick={openLinkInNewTab}
          component={EventIcon}
          color={'inherit'}
        />
      );
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
            return (
              <Icon
                type={footerIcon.type}
                link={footerIcon.link}
                key={footerIcon.type}
              />
            );
          })}
        </div>
      </Typography>
    </footer>
  );
};

export default Footer;
