import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { NAVIGATION_HEADERS } from '../constants/content';

const Header = ({ pageToShow, changePageToShow }) => {
  return (
    <Tabs
      value={pageToShow}
      onChange={changePageToShow}
      aria-label='simple tabs example'
    >
      {NAVIGATION_HEADERS.map((section) => (
        <Tab label={section.title} value={section.title} key={section.title} />
      ))}
    </Tabs>
  );
};

export default Header;
