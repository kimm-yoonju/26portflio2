
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-12 border-t" style={{ backgroundColor: theme.colors.background, color: theme.colors.text, borderColor: theme.colors.accent }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div>
            <p className="text-xs opacity-60">{theme.content.footerText}</p>
          </div>
          <div className="text-xs space-y-1 md:space-y-0 md:flex md:space-x-6">
            <div>
              <span className="font-bold mr-2">Email</span>
              <a href={`mailto:${theme.content.contactEmail}`} className="opacity-80 hover:opacity-100">{theme.content.contactEmail}</a>
            </div>
            <div>
              <span className="font-bold mr-2">Phone</span>
              <span className="opacity-80">{theme.content.contactPhone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;