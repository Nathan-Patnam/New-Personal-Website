import React from 'react';
import './App.css';
import Header from './components/header';
import Projects from './screens/projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Router>
    </div>
  );
}

export default App;
