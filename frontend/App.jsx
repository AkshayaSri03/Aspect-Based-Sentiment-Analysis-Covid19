import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Team from './pages/Team';
import { Page } from './types'; // Ensure this path is correct

function App() {
  const [currentPage, setCurrentPage] = useState(Page.HOME);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  // Switch logic to render the correct page
  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={setCurrentPage} />;
      case Page.ABOUT: return <About />;
      case Page.DASHBOARD: return <Dashboard />;
      case Page.METHODOLOGY: return <Methodology />;
      case Page.RESULTS: return <Results />;
      case Page.TEAM: return <Team />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      theme={theme}
      toggleTheme={toggleTheme}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;