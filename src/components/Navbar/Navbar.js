import React from 'react';
import { Link } from 'react-router-component';

import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__item">
      <Link href="/">
        Home
      </Link>
    </div>
    <div className="navbar__item">
      <Link href="/projects">
        Projects
      </Link>
    </div>
    <div className="navbar__item">
      <Link href="/about">
        Me
      </Link>
    </div>
    <div className="navbar__item">
      <Link href="/r">
        404
      </Link>
    </div>
  </div>
);

export default Navbar;
