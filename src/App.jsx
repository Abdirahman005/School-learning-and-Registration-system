// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Courses from './components/Courses';
import HTML5Course from './components/HTML5Course';
import CSSCourse from './components/CSSCourse';
import ReactCourse from './components/ReactCourse';
import PythonCourse from './components/PythonCourse';
import ComputerPackageCourse from './components/ComputerPackageCourse';
import GitVersionCourse from './components/GitVersionCourse';
import EnrollForm from './components/EnrollForm';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/html5" element={<HTML5Course />} />
        <Route path="/courses/css" element={<CSSCourse />} />
        <Route path="/courses/react" element={<ReactCourse />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/computer-packages" element={<ComputerPackageCourse />} />
        <Route path="/courses/git-version" element={<GitVersionCourse />} />
        <Route path="/enroll" element={<EnrollForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
