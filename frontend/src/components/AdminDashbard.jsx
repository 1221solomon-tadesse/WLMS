// AdminDashboard.jsx
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FaBars, FaUserCircle, FaChartLine, FaBook, FaUsersCog } from 'react-icons/fa';
import useAuth from './hook/useAuth';
import './Admin.css'; // Import the CSS file

// Components
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import BookManagement from './BookManagement';
import Analytics from './Analytics';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Admin Dashboard</h3>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="sidebar-nav">
          <li>
            <Link to="/admin-dashboard/dashboard">
              <FaChartLine />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/users">
              <FaUserCircle />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/books">
              <FaBook />
              <span>Book Management</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/analytics">
              <FaChartLine />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleLogout}>
              <FaUsersCog />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        <Routes>
          <Route path="/admin-dashboard/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard/users" element={<UserManagement />} />
          <Route path="/admin-dashboard/books" element={<BookManagement />} />
          <Route path="/admin-dashboard/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;