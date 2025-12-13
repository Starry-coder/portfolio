import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' }
  ];

  // Filter out the current page from navigation items
  const visibleNavItems = navItems.filter(item => item.path !== location.pathname);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {visibleNavItems.map((item, index) => (
          <button
            key={item.path}
            className="nav-button"
            onClick={() => navigate(item.path)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
