import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	return (
		<div className="sticky-top" >
		<header >
 <div className="navbar-brand ">
        </div>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/Books">Books</a>
				<a href="/AddBooks">Add Books</a>
				<a href="/#">About me</a>
                <form className='form-inline my-2 my-lg-0 d-flex justify-content-end'>
				<div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>

          </form>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</div>
	);
}

export default Navbar;