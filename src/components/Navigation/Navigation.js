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

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
