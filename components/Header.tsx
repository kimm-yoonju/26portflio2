
import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 border-b' : 'py-8'}`}
      style={{ 
        backgroundColor: scrolled ? theme.colors.background : 'transparent',
        borderColor: theme.colors.accent,
        color: theme.colors.text
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-sm tracking-widest font-normal uppercase" style={{ color: theme.colors.text }}>
          {theme.content.heroTitle}
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#projects" className="text-sm font-medium hover:opacity-75 transition-opacity">Projects</a>
          <a href="/#about" className="text-sm font-medium hover:opacity-75 transition-opacity">About</a>
          <a href="/#contact" className="text-sm font-medium hover:opacity-75 transition-opacity">Contact</a>
          <Link to="/admin" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">Admin</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;