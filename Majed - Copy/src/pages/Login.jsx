import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    if (!username || !password) return alert('Enter username and password');

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('userId', data.userId);
        navigate('/side-scroller');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (err) {
      alert('Server error during login');
    }
  };

  return (
    <div className="login-container">
      <div className="glass-card">
        <h1>Login to Play</h1>
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
        <p style={{ marginTop: '1rem', color: '#ccc' }}>
          Don't have an account? <a href="/signup" style={{ color: '#8b5cf6' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;