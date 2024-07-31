import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { Link } from 'react-router-dom';

function HomeNav() {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="sticky-top">
      <header>
        <div className="navbar-brand">
          <Link to="/">Home</Link>
        </div>
        <nav ref={navRef}>
          <Link to="/Signup">signup</Link>
          <Link to="/Signup">login</Link>
          <Link to="#" className="dropdown-toggle" onClick={toggleDropdown}>
            Register
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
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

export default HomeNav;