import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../styles/request.css'
const BookBorrow = () => {
  const { id } = useParams(); // bookId from URL
  const location = useLocation();
  const { userId } = location.state || {}; // userId passed from previous page
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState(null); // Changed to a single object
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch book details when component mounts
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/getbooks/${id}`);
        console.log('Book details fetched successfully:', response.data); // Log the response
        setBookDetails(response.data); // Set the book details directly
      } catch (error) {
        console.error('Error fetching book details:', error.response || error.message);
        setError('Failed to load book details. Please try again later.');
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleConfirmBorrow = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:1000/api/requestBorrow`, { bookId: id, userId });
      console.log('Borrow request created successfully:', response.data);
      alert("Book added successfully!");
      setLoading(false);
      navigate('/confirmation', { state: { message: 'Borrow request submitted successfully!' } });
    } catch (error) {
      console.error('Error creating borrow request:', error.response || error.message);
      setError('Failed to submit borrow request. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="borrow-page">
      <h2 className="borrow-title">Confirm Borrow Request</h2>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p className="loading-message">Submitting your request...</p>
      ) : (
        <>
          {bookDetails ? (
            <div className="book-card">
              {bookDetails.image && (
                <div className="book-image">
                  <img src={bookDetails.image} alt={bookDetails.bookname} className="book-cover" />
                </div>
              )}
              <div className="book-info">
                <h3>{bookDetails.bookname || 'Book Name Not Available'}</h3>
                <p>By {bookDetails.author || 'Author Not Available'}</p>
                <p className="description">{bookDetails.description || 'Description Not Available'}</p>
                <p className="price">${bookDetails.price || 'Price Not Available'}</p>
              </div>
              <button onClick={handleConfirmBorrow} className="confirm-button">
                Confirm Borrow Request
              </button>
            </div>
          ) : (
            <p>Loading book details...</p>
          )}
        </>
      )}
    </div>
  );
};

export default BookBorrow;
