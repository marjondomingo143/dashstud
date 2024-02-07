// Sidebar.js
/* eslint-disable react/jsx-no-undef */

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/view-results">View Results</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => handleLogout()}>Log Out</button>
    </aside>
  );
};

const handleLogout = () => {
  // Implement your logout logic here
  console.log('Logging out...');
};

export default Sidebar;
