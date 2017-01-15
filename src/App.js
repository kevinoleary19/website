// @flow
import { RouteTransition } from 'react-router-transition';
import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import './App.scss';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import HomePage from './components/Pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import ProjectPage from './components/Pages/ProjectsPage/ProjectPage';

import MatchAnimate from './components/HigherOrderComponents/MatchAnimate';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Match exactly pattern="/" component={HomePage}/>
        <Match pattern="/about" component={AboutPage}/>
        <MatchAnimate pattern="/projects" component={ProjectPage}/>
        <Miss component={NotFoundPage}/>
      </div>
    </Router>
  );
};

export default App;
