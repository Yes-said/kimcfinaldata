import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Navbar = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="container"> {/* Using 'container' for responsive layout */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
        <Link to="/documentation" className="navbar-item">Documentation</Link>
      </div>

      <div className="navbar-end"> {/* Right-hand side of navbar */}
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/signup" className="button is-info">
              <strong>Sign up</strong>
            </Link>
            <Link to="/login" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
