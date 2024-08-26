import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/requestedBook.css';

const AdminBorrowRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // Fetch all borrow requests when the component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/getRequests');
        setRequests(response.data.requests);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load borrow requests", error);
        setError("Failed to load borrow requests");
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Handle approval of a borrow request
  const handleApprove = async (requestId) => {
    try {
      await axios.put(`http://localhost:1000/api/updateRequest/${requestId}`, { status: 'approved' });
      setRequests(requests.map(request => 
        request._id === requestId ? { ...request, status: 'approved' } : request
      ));
    } catch (error) {
      console.error("Error approving request", error);
      setError("Failed to approve the request");
    }
  };

  // Handle decline of a borrow request
  const handleDecline = async (requestId) => {
    try {
      await axios.put(`http://localhost:1000/api/updateRequest/${requestId}`, { status: 'rejected' });
      setRequests(requests.map(request => 
        request._id === requestId ? { ...request, status: 'rejected' } : request
      ));
    } catch (error) {
      console.error("Error declining request", error);
      setError("Failed to decline the request");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admin-borrow-requests">
      <h1>Borrow Requests</h1>
      <table className="request-table">
        <thead>
          <tr>
            <th>Book Image</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>User Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td>
                {request.bookId && request.bookId.image ? (
                  <img 
                    src={request.bookId.image} 
                    alt={request.bookId.bookname || "Book Image"} 
                    style={{ width: '50px', height: '75px' }} 
                  />
                ) : (
                  <span>No Image Available</span>
                )}
              </td>
              <td>{request.bookId ? request.bookId.bookname : "Unknown Book"}</td>
              <td>{request.bookId ? request.bookId.author : "Unknown Author"}</td>
              <td>{request.userId ? request.userId.name : "Unknown User"}</td>
              <td className={`status ${request.status}`}>
                {request.status}
              </td>
              <td>
                <button 
                  onClick={() => handleApprove(request._id)} 
                  className="approve-button"
                  disabled={request.status === 'approved'}
                >
                  Approve
                </button>
                <button 
                  onClick={() => handleDecline(request._id)} 
                  className="decline-button"
                  disabled={request.status === 'rejected'}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBorrowRequests;
