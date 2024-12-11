import React, { useState } from 'react';
import Candidates from './pages/Candidates';
import Interviewers from './pages/Interviewers';
import JobRequirements from './pages/JobRequirements';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('candidates');

  return (
    <div className="app">
      <nav className="fixed-nav">
        <ul>
          <li><a href="#candidates" onClick={() => setActiveSection('candidates')}>Candidates</a></li>
          <li><a href="#interviewers" onClick={() => setActiveSection('interviewers')}>Interviewers</a></li>
          <li><a href="#job-requirements" onClick={() => setActiveSection('job-requirements')}>Job Requirements</a></li>
        </ul>
      </nav>
      <div className="content">
        {activeSection === 'candidates' && <Candidates />}
        {activeSection === 'interviewers' && <Interviewers />}
        {activeSection === 'job-requirements' && <JobRequirements />}
      </div>
    </div>
  );
};

export default App;


