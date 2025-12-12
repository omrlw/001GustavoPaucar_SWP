import React from 'react';
import FloatingWhatsApp from '../FloatingWhatsApp';
import Footer from './Footer';
import Navbar from './Navbar';
import { useMenu } from '../../hooks/useMenu';
import { useScroll } from '../../hooks/useScroll';

const Layout = ({ children }) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const scrolled = useScroll();

  return (
    <div className="font-body text-dark antialiased bg-light page-mesh">
      <Navbar
        scrolled={scrolled}
        isMenuOpen={isOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
