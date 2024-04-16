import React from 'react';

const Results = ({ items }) => {
  return (
    <div className="sidebar">
      <h2>Results</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
