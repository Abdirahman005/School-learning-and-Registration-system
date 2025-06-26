import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courseDetail.css';
import { FaPython } from 'react-icons/fa';

const PythonCourse = () => {
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const modules = [
    {
      title: 'Introduction to Python',
      content: 'Basics of Python syntax, variables, and data types.'
    },
    {
      title: 'Control Structures',
      content: 'Conditional statements, loops, and logical operations.'
    },
    {
      title: 'Functions & Modules',
      content: 'How to write reusable code using functions and modules.'
    },
    {
      title: 'File Handling & Error Management',
      content: 'Working with files and managing exceptions.'
    },
  ];

  const handleEnroll = () => {
    navigate('/enroll');
  };

  return (
    <div className="course-detail">
      <h2><FaPython /> Python</h2>
      <p>Cost: $70 | Duration: 5 weeks</p>
      <p>Learn Python programming from scratch for data analysis, web apps, and more.</p>

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

export default PythonCourse;
