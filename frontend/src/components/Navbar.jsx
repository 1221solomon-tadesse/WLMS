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

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('token');

  // Check if the user is an admin
  const isAdmin = localStorage.getItem('role') === 'admin';

  return (
    <div className="sticky-top">
      <header>
        <div className="navbar-brand"></div>
        <nav ref={navRef} className="navbar">
          <a href="/">Home</a>
          {isLoggedIn && (
            <>
              <a href="/Books">Books</a>
              {isAdmin ? (
                <>
                  <a href="/AddBooks">Add Books</a>
                  <a href="/AdminSection">Student Requests</a>
                </>
              ) : (
                <a href="/Requestedbooks">My Borrow Requests</a>
              )}
            </>
          )}
          <form className='search-form' onSubmit={handleSearch}>
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
          </form>   
          {isLoggedIn ? (
            <Logout />
          ) : (
            <Link to="/Login" className="login-button">
              Login
            </Link>
          )}
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
