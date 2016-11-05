// @flow
import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';

import './App.scss';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import HomePage from './components/Pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import ProjectPage from './components/Pages/ProjectsPage/ProjectPage';

const App = () => (
  <div className="app">
    <Navbar/>
    <Locations>
      <Location path='/' handler={ HomePage }/>
      <Location path='/about' handler={ AboutPage }/>
      <Location path="/projects" handler={ ProjectPage }/>
      <NotFound handler={ NotFoundPage }/>
    </Locations>
  </div>
);

export default App;
