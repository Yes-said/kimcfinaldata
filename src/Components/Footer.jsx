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
        width: 100%;
        position: relative;
        margin-top: 450px; /* Push the footer down */
        bottom: 0;
      }

      /* Media query for responsiveness */
      @media screen and (max-width: 768px) {
        .footer {
          margin-top: 50px; /* Adjust margin for smaller screens */
        }
      }

      /* Ensure footer content is pushed downwards */
      .footer .content {
        padding-bottom: 30px; /* Adjust this value as needed */
      }

      /* Media query for reducing padding on smaller screens */
      @media screen and (max-width: 768px) {
        .footer .content {
          padding-bottom: 20px; /* Reduce bottom padding on smaller screens */
        }
      }
    `}</style>
  </footer>
);

export default Footer;
