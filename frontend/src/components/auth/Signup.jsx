import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:1000/user/register', data);
      setData({
        name: '',
        email: '',
        password: '',
      });
      navigate('/login');
      alert('User registered successfully!');
    } catch (error) {
      console.error(error);
      alert('Error registering user!');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '5px', width: '300px' }}>
        <div>
          <label htmlFor="name">Full-name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter full-name"
            value={data.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
        </div>
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
          Sign Up
        </button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;