import { useState, useEffect } from 'react';

const SearchResult = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.bookname.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.description.toLowerCase().includes(term)
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className="search-result">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {isLoading && <div className="loader">Loading...</div>}
      </div>
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.bookname} />
              <h3>{book.bookname}</h3>
              <p>by {book.author}</p>
              <p>{book.description}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <div className="no-books">No books found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;