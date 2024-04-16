import React from 'react';

const Students = ({ active, onClick }) => {
  return (
    <div className={`sidebar-item ${active ? 'active' : ''}`} onClick={onClick}>
      <i className="fas fa-user-graduate"></i>
      <span>Students</span>
    </div>
  );
};

export default Students;
