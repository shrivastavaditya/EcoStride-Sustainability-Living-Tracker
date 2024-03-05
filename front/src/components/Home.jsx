// home.jsx or app.jsx
import React from 'react';
import Calendar from './Calendar';
import Sidebar from './Sidebar';
import ActionSections from './Action';

import './home.css'; // Add this import for your main styling

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content-container">
          <div className="sections-container">
            <ActionSections />
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
