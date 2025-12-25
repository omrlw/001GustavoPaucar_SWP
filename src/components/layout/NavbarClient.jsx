import React from 'react';
import Navbar from './Navbar';
import { useMenu } from '../../hooks/useMenu';
import { useScroll } from '../../hooks/useScroll';

const NavbarClient = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const scrolled = useScroll();

  return (
    <Navbar
      scrolled={scrolled}
      isMenuOpen={isOpen}
      onToggleMenu={toggleMenu}
      onCloseMenu={closeMenu}
    />
  );
};

export default NavbarClient;
