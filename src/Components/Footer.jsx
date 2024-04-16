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
    <style jsx>{`
      .footer {
        position: relative;
        bottom: -100px;
        width: 100%;
      }

      /* Ensure footer content is pushed downwards */
      .footer .content {
        padding-bottom: 30px; /* Adjust this value as needed */
      }

      @media screen and (max-width: 768px) {
        .footer {
          position: static; /* Revert to normal flow on smaller screens */
        }

        /* Reduce bottom padding on smaller screens */
        .footer .content {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
