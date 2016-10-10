import React, { Component } from 'react';
import { Location, Locations, NotFound } from 'react-router-component';

import './App.css';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import HomePage from './components/Pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import ProjectPage from './components/Pages/ProjectsPage/ProjectPage';

export default class App extends Component {
  constructor() {
    super();
    this.hobbies = ['Music', 'Investing', 'Statistics', 'Landscapes'];
    this.state = {
      currentHobby: this.hobbies[0]
    };
    this.changeInterval = setInterval(() => this.changeHobby(), 3500);
  }

  changeHobby() {
    const hobbies = this.hobbies;
    const currentHobby = this.state.currentHobby;
    const index = hobbies.indexOf(currentHobby);

    let newHobby;
    if (index + 1 === hobbies.length) {
      newHobby = hobbies[0];
    } else {
      newHobby = hobbies[index + 1];
    }
    this.setState({
      currentHobby: newHobby
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar/>
        <Locations>
          <Location path='/' handler={ HomePage } currentHobby={this.state.currentHobby}/>
          <Location path='/about' handler={ AboutPage }/>
          <Location path="/projects" handler={ ProjectPage }/>
          <NotFound handler={ NotFoundPage }/>
        </Locations>
      </div>
    );
  }
}
