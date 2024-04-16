// About.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import 'bulma/css/bulma.min.css';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>This is the about page.</p>
      {/* Example link back to home page */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
