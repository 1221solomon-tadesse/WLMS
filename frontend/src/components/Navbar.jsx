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
		<header>
 <div className="navbar-brand">
        </div>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/Books">Books</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
                <form className='form-inline my-2 my-lg-0 d-flex justify-content-end'>
            <input
              className='form-control mr-sm-2 search-input'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0 search-button' type='submit'>
              Search
            </button>
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