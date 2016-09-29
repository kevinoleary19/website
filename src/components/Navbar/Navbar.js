import React, { Component } from 'react';
import { Link } from 'react-router-component';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__item">
          <Link href="/">
            Home
          </Link>
        </div>
        <div className="navbar__item">
          <Link href="/">
            Projects
          </Link>
        </div>
        <div className="navbar__item">
          <Link href="/">
            Github
          </Link>
        </div>
        <div className="navbar__item">
          <Link href="/">
            Dribbble
          </Link>
        </div>
        <div className="navbar__item">
          <Link href="/">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
