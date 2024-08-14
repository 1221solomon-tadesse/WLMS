import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/search.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchQuery) {
          const response = await fetch(`http://localhost:1000/api/v1/getBooks/search?q=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();

          const filteredResults = data.books
            ? data.books.filter((book) => {
                const queryWords = searchQuery.toLowerCase().split(' ');
                return queryWords.some(
                  (word) =>
                    book.bookname.toLowerCase().includes(word) ||
                    book.author.toLowerCase().includes(word) ||
                    book.description.toLowerCase().includes(word)
                );
              })
            : [];

          setSearchResults(filteredResults);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div>
      <h2 style={{ paddingTop: '100px' }}>Search Results for "{searchQuery || 'No query'}"</h2>
      <div className="search-results-container">
        {searchResults.map((book) => (
          <div key={book.id} className="search-result-item" onClick={() => handleBookClick(book.id)}>
            <img src={book.image} alt={book.bookname} />
            <div className="book-info">
              <h3>{book.bookname}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;