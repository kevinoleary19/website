// @flow
import React from 'react';

type Props = {
  onClick: string,
  href: string,
  isActive: boolean,
  label: string
};

const StyledLink = ({ onClick, href, isActive, label }: Props) => (
  <a
    href={href}
    className={isActive ? 'Navbar__item__link Navbar__item__link--active' : 'Navbar__item__link'}
    onClick={onClick}
  >
    { label }
  </a>
);

export default StyledLink;
