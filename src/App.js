import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './screens/home';
import { RESUME_LINK } from './constants/content';
import { TabPanel, TabContext } from '@material-ui/lab';
import { _openLinkInNewTab } from './helpers/helpers';

function App() {
  const [pageToShow, setPageToShow] = useState('Home');

  const changePageToShow = (event, newPageToShow) => {
    if (newPageToShow === 'Resume') {
      _openLinkInNewTab(RESUME_LINK);
    } else {
      setPageToShow(newPageToShow);
    }
  };

  return (
    <div className='App'>
      <Header pageToShow={pageToShow} changePageToShow={changePageToShow} />
      <TabContext value={pageToShow}>
        <TabPanel value={'Home'}>
          <Home />
        </TabPanel>
        <TabPanel value={'About'}>About</TabPanel>
        <TabPanel value={'Experience'}>Experience</TabPanel>
      </TabContext>
      <Footer />
    </div>
  );
}

export default App;
