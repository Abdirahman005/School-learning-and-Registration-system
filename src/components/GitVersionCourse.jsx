// src/components/GitVersion.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courseDetail.css';
import { FaGitAlt } from 'react-icons/fa';

const GitVersion = () => {
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const handleEnroll = () => {
    navigate('/enroll');
  };

  const modules = [
    {
      title: 'Introduction to Version Control',
      content: 'Understand what version control is and why it’s important.'
    },
    {
      title: 'Git Basics',
      content: 'Commands like init, clone, commit, push, and pull.'
    },
    {
      title: 'Branching & Merging',
      content: 'Working with multiple branches and resolving merge conflicts.'
    },
    {
      title: 'GitHub Collaboration',
      content: 'Using GitHub for remote repositories and collaboration.'
    },
  ];

  return (
    <div className="course-detail">
      <h2><FaGitAlt /> Git & Version Control</h2>
      <p>Cost: $45 | Duration: 4 weeks</p>
      <p>Master version control with Git and collaborate effectively using GitHub.</p>

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
        <button className="enroll-btn" onClick={handleEnroll}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default GitVersion;
