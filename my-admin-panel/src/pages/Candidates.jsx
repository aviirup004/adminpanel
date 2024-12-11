import React, { useState } from 'react';
import './Form.css';

const Candidates = () => {
  const [candidateName, setCandidateName] = useState('');
  const [position, setPosition] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [notes, setNotes] = useState('');
  const [cv, setCv] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ candidateName, position, applicationDate, notes, cv });
  };

  return (
    <div className="form-container">
      <h2>Candidate's Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Candidate's Name:</label>
        <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} required />

        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />

        <label>Application Date:</label>
        <input type="date" value={applicationDate} onChange={(e) => setApplicationDate(e.target.value)} required />

        <label>Additional Notes:</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

        <label>Candidate CV:</label>
        <input type="file" onChange={(e) => setCv(e.target.files[0])} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Candidates;
