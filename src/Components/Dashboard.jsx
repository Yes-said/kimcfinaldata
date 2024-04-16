import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Dashboard = () => {
  return (
    <div className="sidebar-item">
      <Link to="/dashboard" className="sidebar-link">
        Dashboard
      </Link>
    </div>
  );
};

export default Dashboard;
