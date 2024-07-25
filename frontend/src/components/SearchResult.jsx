import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
	const [results, setResults] = useState([]);
	const location = useLocation();

	useEffect(() => {
		const query = new URLSearchParams(location.search).get('query');
		if (query) {
			fetchBooks(query);
		}
	}, [location]);

	const fetchBooks = async (query) => {
        try {
            const response = await axios.get(`http://localhost:1000/api/v1/getBooks?query=${query}`);
            setResults(response.data.books); // Adjusted to access the books array
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

	return (
		<div>
			<h2>Search Results</h2>
			{results.length > 0 ? (
				results.map((book) => (
					<div key={book._id}>
						<h3>{book.bookname}</h3>
						<p>By {book.author}</p>
					</div>
				))
			) : (
				<p>No results found.</p>
			)}
		</div>
	);
};

export default SearchResults;