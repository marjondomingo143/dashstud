// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'; // Import global styles

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        {/* Add other components and content for your dashboard here */}
      </div>
    </div>
  );
};

export default App;
