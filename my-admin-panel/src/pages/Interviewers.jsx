import React, { useState } from 'react';
import './Form.css';

const Interviewers = () => {
  const [interviewerName, setInterviewerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ interviewerName, email, phoneNumber, designation });
  };

  return (
    <div className="form-container">
      <h2>Interviewer's Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={interviewerName} onChange={(e) => setInterviewerName(e.target.value)} required />

        <label>Email ID:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Contact No:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Interviewers;
