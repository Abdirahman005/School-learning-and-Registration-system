import React, { useState } from 'react';
import { FaHtml5 } from 'react-icons/fa';
import '../styles/courseDetail.css';

const HTML5Course = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules = [
    {
      title: "Introduction to HTML5",
      content: "Understand the structure and purpose of HTML5. Learn the difference between HTML4 and HTML5, semantic tags, and the basic building blocks of web pages.",
    },
    {
      title: "HTML Document Structure",
      content: "Explore the anatomy of an HTML5 document including doctype, html, head, and body tags. Learn about meta tags and best practices for structuring your content.",
    },
    {
      title: "Text Formatting & Headings",
      content: "Learn to use tags like <h1> to <h6>, <p>, <br>, <strong>, <em>, and more to organize and emphasize text.",
    },
    {
      title: "Lists and Links",
      content: "Create ordered and unordered lists, definition lists, and learn to link pages internally and externally using <a> tags.",
    },
    {
      title: "Images, Audio & Video",
      content: "Embed multimedia using <img>, <audio>, and <video> elements. Learn attributes like controls, autoplay, and poster.",
    },
    {
      title: "Forms and Input",
      content: "Build interactive forms using <form>, <input>, <textarea>, <select>, and more. Understand form validation and accessibility.",
    },
    {
      title: "Semantic Elements",
      content: "Use semantic tags such as <article>, <section>, <nav>, <header>, <footer>, and <aside> to improve structure and SEO.",
    },
    {
      title: "Best Practices & Accessibility",
      content: "Learn how to write clean, accessible HTML code. Follow best practices and understand ARIA roles and screen reader compatibility.",
    },
  ];

  return (
    <div className="course-detail">
      <div className="course-header">
        <FaHtml5 className="course-icon" />
        <h2>HTML5 Course</h2>
        <p className="course-cost">$40</p>
        <p>Master the foundation of web development with this comprehensive HTML5 course. Learn how to structure webpages, embed media, and build accessible forms using semantic HTML.</p>
      </div>

      <div className="course-modules">
        {modules.map((module, index) => (
          <div key={index} className="module">
            <div className="module-title" onClick={() => toggleModule(index)}>
              <h4>{module.title}</h4>
              <span>{expandedModule === index ? "-" : "+"}</span>
            </div>
            {expandedModule === index && <p className="module-content">{module.content}</p>}
          </div>
        ))}
      </div>

      <div className="enroll-section">
        <button className="enroll-button" onClick={() => alert("Enroll form coming soon!")}>Enroll Now</button>
      </div>
    </div>
  );
};

export default HTML5Course;
