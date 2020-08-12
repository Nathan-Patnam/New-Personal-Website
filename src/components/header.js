import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { NAVIGATION_HEADERS } from '../constants/content';

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

  return (
    <Toolbar
      component='nav'
      variant='dense'
      className={classes.toolbarSecondary}
    >
      {NAVIGATION_HEADERS.map((section) => (
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
