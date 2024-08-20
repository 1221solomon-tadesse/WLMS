import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/requestedBook.css'
const AdminBorrowRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/getRequests');
        setRequests(response.data.requests);
        setLoading(false);
      } catch (error) {
        setError("Failed to load borrow requests");
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (requestId) => {
    try {
      await axios.post(`/approveRequest/${requestId}`);
      setRequests(requests.map(request => 
        request._id === requestId ? { ...request, status: 'approved' } : request
      ));
    } catch (error) {
      console.error("Error approving request", error);
    }
  };

  const handleDecline = async (requestId) => {
    try {
      await axios.post(`/declineRequest/${requestId}`);
      setRequests(requests.map(request => 
        request._id === requestId ? { ...request, status: 'rejected' } : request
      ));
    } catch (error) {
      console.error("Error declining request", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Borrow Requests</h1>
      <table>
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
                <img src={request.bookId.image} alt={request.bookId.bookname} style={{ width: '50px', height: '75px' }} />
              </td>
              <td>{request.bookId.bookname}</td>
              <td>{request.bookId.author}</td>
              <td>{request.userId.name}</td>
              <td>{request.status}</td>
              <td>
                <button onClick={() => handleApprove(request._id)}>Approve</button>
                <button onClick={() => handleDecline(request._id)}>Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBorrowRequests;
