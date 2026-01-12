
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import BehanceIcon from './icons/BehanceIcon';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-12" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href={theme.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <InstagramIcon />
          </a>
          <a href={theme.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <LinkedInIcon />
          </a>
          <a href={theme.socials.behance} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <BehanceIcon />
          </a>
        </div>
        <p className="text-sm opacity-60">{theme.content.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
