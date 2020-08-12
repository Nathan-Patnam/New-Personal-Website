import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaEnvelope,
  FaFile,
  FaYoutube,
} from 'react-icons/fa';

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
      return <FaLinkedinIn />;
    case 'GitHub':
      return <FaGithub />;
    case 'Medium':
      return <FaMediumM />;
    case 'Email':
      return <FaEnvelope />;
    case 'Resume':
      return <FaFile />;
    case 'Youtube':
      return <FaYoutube />;
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
