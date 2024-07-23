import React from 'react';
import '../styles/bookSection.css';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BooksSection = ({ data, isLoading }) => {
  const navigate = useNavigate();

  // Function to handle update action
  const handleUpdate = (id) => {
    navigate(`/Update/${id}`);
  };

  // Function to handle delete action
  // const handleDelete = async (bookname) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/api/v1/deleteBook/${bookname}`);
  //     window.location.reload();
  //   } catch (error) {
  //     if (error.response && error.response.status === 404) {
  //       console.error('Book not found. Unable to delete.');
  //     } else {
  //       console.error('Error deleting the book:', error);
  //     }
  //   }
  // };

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
              {/* <button
                onClick={() => handleDelete(id)}
                className="btn btn-danger delete-btn"
                style={{ color: 'rgb(242,100,100)', padding: '0.5rem 1rem', border: 'none', background: 'rgb(245,191,191)', cursor: 'pointer' }}
              >
                Delete
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;