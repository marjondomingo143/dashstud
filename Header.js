// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="dashboard-header">
      <img src="path/to/your/logo.png" alt="Your Logo" className="logo" />
      <h1>Your Dashboard</h1>
      {/* Add any other header content here */}
    </header>
  );
};

export default Header;
