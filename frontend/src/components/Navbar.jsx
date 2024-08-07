import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import { Link } from 'react-router-dom';

function Navbar({ currentUser }) {
  const navRef = useRef();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const isUserLoggedIn = localStorage.getItem('user_id') !== null;
    setIsLoggedIn(isUserLoggedIn);
  }, []);

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

  const role = localStorage.getItem('user_role');

  return (
    <div className="sticky-top">
      <header>
        <div className="navbar-brand"></div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          {role === "admin" && (
            <>
              <a href="/Books">Books</a>
              <a href="/AddBooks">Add Books</a>
            </>
          )}
          {isLoggedIn ? (
            <a href="/logout">Logout</a>
          ) : (
            <a href="/login">Login</a>
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
              {!isLoggedIn && (
                <li className="nav-item dropdown" onClick={toggleDropdown}>
                  <Link to="#" className="dropdown-toggle">
                    Register
                  </Link>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <Link to="/Login">Login</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to="/Signup">Signup</Link>
                      </li>
                    </ul>
                  )}
                </li>
              )}
            </div>
          </form>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        {currentUser}
      </header>
    </div>
  );
}

export default Navbar;