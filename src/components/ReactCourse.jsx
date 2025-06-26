// src/components/ReactCourse.jsx
import React, { useState } from 'react';
import '../styles/courseDetail.css';
import EnrollForm from './EnrollForm';         // ✅ import the form
import { FaReact } from 'react-icons/fa';

const ReactCourse = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [showForm, setShowForm] = useState(false);  // track whether to show the form

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const modules = [
    { title: 'Introduction to React',    content: 'Overview of components, JSX, and the virtual DOM.' },
    { title: 'State and Props',           content: 'Learn how data flows in React using props and state.' },
    { title: 'Hooks & Lifecycle',         content: 'Understand useState, useEffect, and component lifecycle.' },
    { title: 'React Router & Forms',      content: 'Routing, navigation, and form handling in React apps.' },
  ];

  const handleEnroll = () => {
    setShowForm(true);
    // optionally scroll into view:
    setTimeout(() => {
      document.getElementById('enroll-form-anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="course-detail">
      <h2><FaReact /> React</h2>
      <p>Cost: $60 | Duration: 5 weeks</p>
      <p>Master building modern web applications with the React framework.</p>

      <div className="modules">
        {modules.map((mod, index) => (
          <div key={index} className="module">
            <div onClick={() => toggleModule(index)} className="module-title">
              {mod.title}
            </div>
            {activeModule === index && (
              <div className="module-content">{mod.content}</div>
            )}
          </div>
        ))}
      </div>

      <div className="enroll-section">
        {!showForm ? (
          <button className="enroll-btn" onClick={handleEnroll}>
            Enroll Now
          </button>
        ) : null}
      </div>

      {/*
        Anchor for scrolling into view when form appears
      */}
      <div id="enroll-form-anchor" />

      {showForm && (
        <div className="embedded-enroll-form">
          <EnrollForm />
        </div>
      )}
    </div>
  );
};

export default ReactCourse;
