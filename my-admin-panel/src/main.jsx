import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Candidates from './pages/Candidates';
import Interviewers from './pages/Interviewers';
import JobRequirements from './pages/JobRequirements';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/interviewers" element={<Interviewers />} />
        <Route path="/job-requirements" element={<JobRequirements />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
