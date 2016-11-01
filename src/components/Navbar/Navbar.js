import React from 'react';
import { Link } from 'react-router-component';

import './Navbar.scss';

const Navbar = () => (
  <div className="Navbar">
    <div className="Navbar__item">
      <Link href="/">
        Home
      </Link>
    </div>
    <div className="Navbar__item">
      <Link href="/projects">
        Projects
      </Link>
    </div>
    <div className="Navbar__item">
      <Link href="/about">
        Me
      </Link>
    </div>
    <div className="Navbar__item">
      <Link href="/r">
        404
      </Link>
    </div>
  </div>
);

export default Navbar;
