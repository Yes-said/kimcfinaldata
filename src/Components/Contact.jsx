// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import 'bulma/css/bulma.min.css';

const Contact = () => {
  return (
    <li className="nav-item">
      <Link to="/contact" className="nav-link">Contact</Link>
    </li>
  );
};

export default Contact;
