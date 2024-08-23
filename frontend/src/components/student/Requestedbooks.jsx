import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/RequestStatus.css';

const UserBorrowRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const userId = localStorage.getItem('userId'); // Get user ID from localStorage

        if (!token || !userId) {
          throw new Error('User not logged in or user ID missing');
        }
        
        const response = await axios.get(`http://localhost:1000/api/getUserRequests/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('Response data:', response.data); // Debugging line
        setRequests(response.data.requests);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching borrow requests:", error);
        setError('Failed to load borrow requests. Please try again later.');
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p className='loading'>Loading requests...</p>;
  if (error) return <p className='error'>{error}</p>;

  return (
    <div className='student'>
      <h2 className='title'style={{paddingTop:60,borderRadius: '0.26rem',
                    backgroundColor: '#4CAF50'}}>Your Borrow Requests</h2>
      <ul className='requestList'>
        {requests.length > 0 ? (
          requests.map((request) => (
            <li key={request._id} className='requestItem'>
              <h3>{request.bookId.bookname}</h3>
              <p>Status: <strong>{request.status}</strong></p>
              <p>Requested on: {new Date(request.requestDate).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p className='noRequests'>No borrow requests found.</p>
        )}
      </ul>
    </div>
  );
};

export default UserBorrowRequests;
