import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1000/auth/login', data);
      setData({
        email: '',
        password: '',
      });
  
      // Check the user's role in the response
      if (response.data.role === 'admin') {
        navigate('/Books');
        alert('Admin user logged in successfully!');
      } else {
        navigate('/Home');
        alert('User logged in successfully!');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        console.error(error);
        alert('Error logging in!');
      }
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
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
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
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