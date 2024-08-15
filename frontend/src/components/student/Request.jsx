import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const BookBorrow = () => {
  const { id } = useParams(); // bookId from URL
  const location = useLocation();
  const { userId } = location.state; // userId passed from previous page
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConfirmBorrow = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:1000/api/requestBorrow`, { bookId: id, userId });
      console.log('Borrow request created successfully:', response.data);
      setLoading(false);
      navigate('/confirmation', { state: { message: 'Borrow request submitted successfully!' } });
    } catch (error) {
      console.error('Error creating borrow request:', error);
      setError('Failed to submit borrow request. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="borrow-page">
      <h2 style={{ paddingTop: "100px",}}>Confirm Borrow Request</h2>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Submitting your request...</p>
      ) : (
        
        <button
          onClick={handleConfirmBorrow}
          style={{
           
            textDecoration: 'none',
            borderRadius: '0.25rem',
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '0.5rem 1rem',
          }}
        >
          Confirm Borrow Request
        </button>
      )}
    </div>
  );
};

export default BookBorrow;
