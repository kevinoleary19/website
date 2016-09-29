import React, { Component } from 'react';
import { Location, Locations, NotFound } from 'react-router-component';

import './App.css';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import HomePage from './components/Pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Locations>
          <Location path='/' handler={ HomePage }/>
          <Location path='/contact' handler={ ContactPage }/>
          <NotFound handler={ NotFoundPage }/>
        </Locations>
      </div>
    );
  }
}
