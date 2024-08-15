import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRequestsSection = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/v1/getRequests');
        setRequests(response.data.requests);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching requests:', error);
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleUpdateRequest = async (id, status) => {
    try {
      await axios.put(`http://localhost:1000/api/v1/updateRequest/${id}`, { status });
      // Update local state
      setRequests(requests.map(req =>
        req._id === id ? { ...req, status } : req
      ));
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (requests.length === 0) {
    return <div>No requests found.</div>;
  }

  return (
    <div className="admin-requests">
      <h2>Borrow Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>User</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td>{request.bookId.bookname}</td>
              <td>{request.userId}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'pending' && (
                  <>
                    <button onClick={() => handleUpdateRequest(request._id, 'approved')}>Approve</button>
                    <button onClick={() => handleUpdateRequest(request._id, 'rejected')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRequestsSection;
