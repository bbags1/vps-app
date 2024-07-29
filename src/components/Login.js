import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', {}, {
      auth: {
        username,
        password
      }
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    })
    .catch(error => {
      alert('Invalid credentials');
      console.error('Error logging in:', error);
    });
  };

  return (
    <div className="login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;