import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user's token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user_role')
    window.localStorage.setItem("isloggedIn",false)
    // Redirect the user to the login page
    navigate('/Login');
  };

  return (
    
    <button className="nav-item logout-btn" onClick={handleLogout} style={{
      'backgroundColor': '#e74c3c',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    }}>
      Logout
    </button>
  );
};

export default Logout;