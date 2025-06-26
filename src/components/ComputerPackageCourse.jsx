import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/courseDetail.css';
import { SiGooglesheets } from 'react-icons/si';

const ComputerPackage = () => {
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
      title: 'Microsoft Word',
      content: 'Document creation, formatting, tables, and mail merge.'
    },
    {
      title: 'Microsoft Excel',
      content: 'Formulas, charts, pivot tables, and data analysis.'
    },
    {
      title: 'Microsoft PowerPoint',
      content: 'Creating slideshows with transitions and animations.'
    },
    {
      title: 'Internet & Email',
      content: 'Using browsers, searching, and managing email.'
    },
  ];

  return (
    <div className="course-detail">
      <h2><SiGooglesheets /> Computer Packages</h2>
      <p>Cost: $30 | Duration: 3 weeks</p>
      <p>A foundational course covering Microsoft Office tools and basic computer use.</p>

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

export default ComputerPackage;
