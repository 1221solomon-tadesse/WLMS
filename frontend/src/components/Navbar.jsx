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
  //const isAdmin = localStorage.getItem('role')=='admin' ;

  return (
    <div className="sticky-top">
      <header>
        <div className="navbar-brand"></div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          {isLoggedIn && (
            <>
              <a href="/Books">Books</a>
              {localStorage.getItem('role') === 'admin' ? (<a href="/AddBooks">Add Books</a>):(
                <></>
              )
              }
              
            </>
          )}
          <a href="/#">About</a>
         
          <form className='form-inline my-2 my-lg-0 d-flex justify-content-end' onSubmit={handleSearch}>
            <div className="search-container"style={{marginLeft:"400px"}}>
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
     
      <Link to="/Login" style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "3CE88D",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}>
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