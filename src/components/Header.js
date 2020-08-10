import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = () => {
  const classes = useStyles();

  const sections = [
    { title: 'About', url: 'about' },
    { title: 'Experience', url: 'experience' },
    { title: 'Service', url: 'services' },
    { title: 'Projects', url: 'projects' },
  ];

  return (
    <Toolbar
      component='nav'
      variant='dense'
      className={classes.toolbarSecondary}
    >
      {sections.map((section) => (
        <Link
          color='inherit'
          noWrap
          key={section.title}
          variant='body2'
          href={section.url}
          className={classes.toolbarLink}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  );
};

export default Header;
