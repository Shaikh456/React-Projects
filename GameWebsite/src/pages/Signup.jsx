// SignUp.jsx

import React, { useState } from 'react';
import '../styles/Login.css'; // Reuse login styles for theme consistency
import { useNavigate } from 'react-router-dom'; // For redirection

const SignUp = () => {
  // State variables for signup form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // For navigation after sign up

  // Handle sign up (fake logic)
  const handleSignUp = () => {
    if (username && email && password) {
      // Ideally, you'd send this data to a backend here
      localStorage.setItem('loggedIn', 'true');
      navigate('/side-scroller'); // Redirect after signup
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="login-container">
      {/* Styled glass card for sign-up form */}
      <div className="glass-card">
        <h1>Create Account</h1>

        {/* Username field */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Sign Up button */}
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
