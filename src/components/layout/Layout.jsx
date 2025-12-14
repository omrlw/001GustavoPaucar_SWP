import React from 'react';
import FloatingWhatsApp from '../FloatingWhatsApp';
import Footer from './Footer';
import Navbar from './Navbar';
import SeoManager from '../seo/SeoManager';
import { useMenu } from '../../hooks/useMenu';
import { useScroll } from '../../hooks/useScroll';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Layout = ({ children }) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const scrolled = useScroll();

  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <div className="font-body text-dark antialiased bg-light page-mesh">
      <SeoManager />
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
