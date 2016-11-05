import React from 'react';
import Link from 'react-router/Link';
import StyledLink from '../HigherOrderComponents/StyledLink';

import './Navbar.scss';

const Navbar = () => (
  <div className="Navbar">
    <div className="Navbar__item">
      <Link activeOnlyWhenExact to="/">
        {(props) => <StyledLink label='Home' {...props} />}
      </Link>
    </div>
    <div className="Navbar__item">
      <Link to="/projects">
        {(props) => <StyledLink label='Projects' {...props} />}
      </Link>
    </div>
    <div className="Navbar__item">
      <Link to="/about">
        {(props) => <StyledLink label='Me' {...props} />}
      </Link>
    </div>
  </div>
);

export default Navbar;
