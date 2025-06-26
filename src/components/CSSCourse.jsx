import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courseDetail.css';
import { FaCss3Alt } from 'react-icons/fa';

const CSSCourse = () => {
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const modules = [
    {
      title: 'Introduction to CSS',
      content: 'Covers CSS syntax, types of CSS, selectors, and how to include CSS in HTML.'
    },
    {
      title: 'Box Model & Positioning',
      content: 'Understand padding, margin, border, and content. Learn positioning techniques.'
    },
    {
      title: 'Flexbox & Grid',
      content: 'Learn layout techniques for responsive design using Flexbox and Grid.'
    },
    {
      title: 'Animations & Transitions',
      content: 'CSS animation basics, keyframes, and transitions for interactive design.'
    },
  ];

  const handleEnroll = () => {
    navigate('/enroll');
  };

  return (
    <div className="course-detail">
      <h2><FaCss3Alt /> CSS</h2>
      <p>Cost: $40 | Duration: 4 weeks</p>
      <p>Learn how to style websites and make them visually appealing using CSS.</p>

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

export default CSSCourse;
