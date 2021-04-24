import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tab, Tabs } from '@material-ui/core';
import { NAVIGATION_HEADERS } from '../constants/content';

const Header = ({ pageToShow, changePageToShow }) => {
  const StyledTabs = withStyles({
    indicator: {
      'display': 'flex',
      'justifyContent': 'center',
      'backgroundColor': 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

  const StyledTab = withStyles((theme) => ({
    root: {
      'textTransform': 'none',
      'color': 'black',
      'fontWeight': theme.typography.fontWeightRegular,
      'fontSize': theme.typography.pxToRem(15),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

  return (
    <StyledTabs
      value={pageToShow}
      onChange={changePageToShow}
      aria-label='Navigation Tabs'
    >
      {NAVIGATION_HEADERS.map((section) => (
        <StyledTab
          label={section.title}
          value={section.title}
          key={section.title}
        />
      ))}
    </StyledTabs>
  );
};

export default Header;
