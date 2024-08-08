import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';

function Navbar() {
  const navRef = useRef();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?query=${encodeURIComponent(search)}`);
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('token');

  // Check if the user is an admin
  const isAdmin = localStorage.getItem('role') ;

  return (
    <div className="sticky-top">
      <header>
        <div className="navbar-brand"></div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          {isLoggedIn && (
            <>
              <a href="/Books">Books</a>
              {isAdmin && <a href="/AddBooks">Add Books</a>}
            </>
          )}
          <a href="/#">About me</a>
          <form className='form-inline my-2 my-lg-0 d-flex justify-content-end' onSubmit={handleSearch}>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search for books..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="search-button">
                Search
              </button>
              </div>
              {isLoggedIn ? (
      <Logout />
    ) : (
      <li className="nav-item dropdown" onClick={toggleDropdown} style={{ position: 'relative', marginRight: '0' }}>
        <Link to="#" className="dropdown-toggle" style={{ color: '#fff', textDecoration: 'none' }}>
          Register
        </Link>
        {isDropdownOpen && (
          <ul className="dropdown-menu" style={{ position: 'absolute', right: 0, backgroundColor: '#333', padding: '10px', listStyle: 'none', margin: 0, zIndex: 1 }}>
            <li className="dropdown-item">
              <Link to="/Login" style={{ color: '#fff', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="/Signup" style={{ color: '#fff', textDecoration: 'none' }}>
                Signup
              </Link>
            </li>
          </ul>
        )}
      </li>
    )}
            
          </form>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;