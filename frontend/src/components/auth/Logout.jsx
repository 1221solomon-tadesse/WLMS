import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user's token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    localStorage.removeItem('email')
    localStorage.removeItem('userId')
    window.localStorage.setItem("isloggedIn",false)
    // Redirect the user to the login page
    navigate('/Login');
  };

  return (
    
    <button className="nav-item logout-btn" onClick={handleLogout} style={{
      position: "absolute",
  top: "10px",
  right: "10px", // Adjust the right position to accommodate the login link
  backgroundColor : "E8AF3C",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"
    }}>
      Logout
    </button>
  );
};

export default Logout;