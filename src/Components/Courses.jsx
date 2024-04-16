import React from 'react';

const Courses = () => {
  // Example list of courses (replace with your data)
  const courses = [
    { id: 1, name: 'Introduction to React' },
    { id: 2, name: 'JavaScript Fundamentals' },
    { id: 3, name: 'Web Development Basics' }
  ];

  return (
    <div className="sidebar-item">
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
