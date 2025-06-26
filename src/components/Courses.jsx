// src/components/Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/courses.css';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

const courses = [
  {
    id: 'html5',
    title: 'HTML5',
    icon: <FaHtml5 className="course-icon" />,
    cost: 50,
    duration: '4 weeks',
    description: 'Learn the structure of web pages using HTML5.',
    modules: [
      { title: 'Intro & Semantics', content: 'Lesson text for Intro & Semantics...' },
      { title: 'Multimedia', content: 'Lesson text for Multimedia...' },
      { title: 'Forms & Validation', content: 'Lesson text for Forms & Validation...' },
    ],
  },
  {
    id: 'css',
    title: 'CSS3',
    icon: <FaCss3Alt className="course-icon" />,
    cost: 60,
    duration: '4 weeks',
    description: 'Style your websites beautifully with modern CSS techniques.',
    modules: [ /* similar modules */ ],
  },
  {
    id: 'react',
    title: 'React',
    icon: <FaReact className="course-icon" />,
    cost: 70,
    duration: '6 weeks',
    description: 'Build dynamic SPA apps with React.',
    modules: [],
  },
  {
    id: 'python',
    title: 'Python',
    icon: <FaPython className="course-icon" />,
    cost: 65,
    duration: '5 weeks',
    description: 'Master fundamentals and advanced Python.',
    modules: [],
  },
  {
    id: 'computer-packages',
    title: 'Computer Packages',
    icon: <SiGooglesheets className="course-icon" />,
    cost: 40,
    duration: '3 weeks',
    description: 'MS Word, Excel, PowerPoint.',
    modules: [],
  },
  {
    id: 'git-version',             // <-- updated here
    title: 'Git & Version Control',
    icon: <FaGitAlt className="course-icon" />,
    cost: 55,
    duration: '3 weeks',
    description: 'Track code with Git and GitHub.',
    modules: [],
  },
];

const Courses = () => (
  <div className="courses-container">
    <h2>Courses Offered</h2>
    <div className="courses-grid">
      {courses.map(c => (
        <Link key={c.id} to={`/courses/${c.id}`} className="course-card">
          {c.icon}
          <h3>{c.title}</h3>
          <p>💲{c.cost} • {c.duration}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Courses;
