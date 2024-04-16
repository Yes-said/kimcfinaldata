import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Sidebar = ({ toggleMenu }) => (
  <aside
    className={`menu is-hidden-touch has-background-primary `}
    style={{ 
      height: 'calc(100vh - 60px)', 
      overflowY: 'auto', 
      paddingTop: '20px', /* Adjusted top padding for spacing */
      marginTop: '150px' /* Added margin to create space under navbar */
    }}
  >
    {/* Adding the background color class from Bulma to the sidebar */}
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <li>
        <Link to="/dashboard" onClick={toggleMenu}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/results" onClick={toggleMenu}>
          Results
        </Link>
      </li>
      <li>
        <Link to="/courses" onClick={toggleMenu}>
          Courses
        </Link>
      </li>
      <li>
        <Link to="/students" onClick={toggleMenu}>
          Students
        </Link>
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
          bottom: -50px;
          z-index: 10;
          width: 80%; /* Adjust width for smaller screens */
          max-width: 280px;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.9); /* Dark overlay background */
          transition: transform 0.3s ease-in-out;
          transform: translateX(-100%); /* Initially hide off-screen */
          margin-top: 0; /* Remove margin at the top for smaller screens */
        }

        

        .menu-list li {
          transition: background-color 0.3s;
        }

        .menu-list li:hover {
          background-color: #dddddd; /* Grey hover effect */
        }
      }
    `}</style>
  </aside>
);

export default Sidebar;
