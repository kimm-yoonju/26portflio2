
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './pages/Portfolio';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
