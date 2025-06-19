import React, { useState } from 'react';
import '../styles/Login.css'; // Styles for login UI
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login
  const login = () => {
    if (username && password) {
      // Save login status, username, and empty scores array
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      if (!localStorage.getItem('scores')) {
        localStorage.setItem('scores', JSON.stringify([])); // initialize scores
      }

      // Redirect to game
      navigate('/side-scroller');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="glass-card">
        <h1>Login to Play</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        <p style={{ marginTop: '1rem', color: '#ccc' }}>
          Don't have an account? <a href="/signup" style={{ color: '#8b5cf6' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
