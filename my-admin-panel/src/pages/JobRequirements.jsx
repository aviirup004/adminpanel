import React, { useState } from 'react';
import './Form.css';

const JobRequirements = () => {
  const [document, setDocument] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ document });
  };

  return (
    <div className="form-container">
      <h2>Job Requirements</h2>
      <form onSubmit={handleSubmit}>
        <label>Upload Document:</label>
        <input type="file" onChange={(e) => setDocument(e.target.files[0])} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobRequirements;
