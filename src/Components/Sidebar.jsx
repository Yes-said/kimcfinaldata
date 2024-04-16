import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Sidebar = () => (
  <aside className="menu is-hidden-touch has-background-primary" style={{ height: '100vh', overflowY: 'auto' }}>
    {/* Adding the background color class from Bulma to the sidebar */}
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/results">Results</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/students">Students</Link>
      </li>
    </ul>

    {/* Style JSX for responsiveness */}
    <style jsx>{`
      .menu {
        width: 240px;
      }

      @media screen and (max-width: 768px) {
        .menu {
          position: fixed;
          top: 60px; /* Push down from top by 60px */
          left: 0;
          bottom: 0;
          z-index: 10;
          width: 80%; /* Adjust width for smaller screens */
          max-width: 280px;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.9); /* Dark overlay background */
          transition: transform 0.3s ease-in-out;
          transform: translateX(-100%); /* Initially hide off-screen */
        }

        .menu.is-active {
          transform: translateX(0); /* Slide in when active */
        }
      }
    `}</style>
  </aside>
);

export default Sidebar;
