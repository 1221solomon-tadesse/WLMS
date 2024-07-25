import React, { useState } from 'react';
import '../styles/bookSection.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BooksSection = ({ data, isLoading }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState(data);

  const handleUpdate = (id) => {
    navigate(`/Update/${id}`);
  };

  const handleDelete = async (id) => {
    console.log('Attempting to delete book with ID:', id);
    try {
      await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      console.log('Book deleted successfully');

      // Update the state to remove the deleted book
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="books-section loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="books-section no-books">
        <h2>No books found.</h2>
      </div>
    );
  }

  return (
    <div className="books-section">
      <h2>Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            {book.image && (
              <div className="book-image">
                <img src={book.image} alt={book.bookname} className="book-cover" />
              </div>
            )}
            <div className="book-info">
              <h3>{book.bookname}</h3>
              <p>By {book.author}</p>
              <p className="description">{book.description}</p>
              <p className="price">${book.price}</p>
            </div>
            <div className="button-group">
              <button
                onClick={() => handleUpdate(book._id)}
                style={{
                  textDecoration: 'none',
                  borderRadius: '0.25rem',
                  backgroundColor: '#3A9DAB',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                }}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-danger delete-btn"
                style={{ color: 'rgb(242,100,100)', padding: '0.5rem 1rem', border: 'none', background: 'rgb(245,191,191)', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;