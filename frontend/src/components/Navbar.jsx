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
		<header className="sticky-top">
 <div className="navbar-brand ">
        </div>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/Books">Books</a>
				<a href="/AddBooks">Add Books</a>
				<a href="/#">About me</a>
                <form className='form-inline my-2 my-lg-0 d-flex justify-content-end'>
				<div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search"
      />
      <button type="submit" class="search-button">
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
	);
}

export default Navbar;