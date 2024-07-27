import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to submit the form data
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '5px', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Sign In
        </button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;