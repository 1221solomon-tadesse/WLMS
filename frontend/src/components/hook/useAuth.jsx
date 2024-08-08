import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('user_role');
    setIsLoggedIn(!!token);
    setUserRole(role);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_role');
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/');
  };

  return { isLoggedIn, logout, userRole };
};

export default useAuth;