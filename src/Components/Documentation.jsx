import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import 'bulma/css/bulma.min.css';

const Documentation = () => {
  return (
    <li className="nav-item">
      <Link to="/documentation" className="nav-link">
        Documentation
      </Link>
    </li>
  );
};

export default Documentation;
