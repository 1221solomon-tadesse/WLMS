import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/main.css";

function Navbar() {
	const navRef = useRef();
	const [search, setSearch] = useState('');
	const navigate = useNavigate(); // Initialize useNavigate

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleSearch = (e) => {
		e.preventDefault(); // Prevent the default form submission
		if (search.trim()) {
			// Redirect to the search results page with the search term as a query parameter
			navigate(`/search?query=${encodeURIComponent(search)}`);
		}
	};

	return (
		<div className="sticky-top">
			<header>
				<div className="navbar-brand"></div>
				<nav ref={navRef}>
					<a href="/Home">Home</a>
					<a href="/Books">Books</a>
					<a href="/AddBooks">Add Books</a>
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