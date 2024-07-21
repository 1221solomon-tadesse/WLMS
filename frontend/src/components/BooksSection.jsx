import React from 'react';
import '../styles/bookSection.css';
import axios from 'axios';

const BooksSection = ({ data, isLoading }) => {
  // Function to handle delete action
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this book?');
    if (confirmed) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/v1/deleteBook/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 201) {
          alert(response.data.message);
          // Update the UI or state as needed
          window.location.reload();
        } else {
          alert(`Failed to delete the book: ${response.data.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting the book:', error);
        if (error.response && error.response.data && error.response.data.error) {
          alert(`Error deleting the book: ${error.response.data.error}`);
        } else {
          alert('An unknown error occurred while deleting the book. Please try again later.');
        }
      }
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
        {data.map((book) => (
          <div key={book.id} className="book-card">
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
              <a
                href={`/books/${book.id}/edit`}
                style={{ textDecoration: 'none', borderRadius: '0.25rem', backgroundColor: '#3A9DAB', color: '#fff', padding: '0.5rem 1rem' }}>
                Update
              </a>
              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-danger delete-btn"
                style={{ color: '#47b5ff', padding: '0.5rem 1rem', border: 'none', background: 'transparent', cursor: 'pointer' }}>
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