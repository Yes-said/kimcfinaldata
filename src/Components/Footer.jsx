import React from 'react';
import 'bulma/css/bulma.min.css';

const Footer = () => (
  <footer className="footer has-background-primary">
    <div className="content has-text-centered">
      <p>
        <strong>&copy; {new Date().getFullYear()} Kenya Institute Of Mass Communication. All rights reserved.</strong> by Said
      </p>
      <p>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </p>
    </div>
    
  </footer>
);

export default Footer;
