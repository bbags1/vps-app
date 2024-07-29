import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobName, setJobName] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleJobNameChange = (e) => {
    setJobName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('jobName', jobName);

    const token = localStorage.getItem('token');
    axios.post('/api/upload', formData, {
      headers: {
        'x-access-token': token
      }
    })
    .then(response => alert('File uploaded successfully!'))
    .catch(error => console.error('Error uploading file:', error));
  };

  return (
    <div className="admin">
      <h1>Admin Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Job Name" value={jobName} onChange={handleJobNameChange} required />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Admin;