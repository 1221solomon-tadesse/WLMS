import React, { useState } from 'react';
import '../styles/AddBook.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:1000/api/v1/add', data);
      setData({
        bookname: "",
        author: "",
        description: "",
        image: "",
        price: ""
      });
      alert("Book added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding book!");
    }
  };

  const handleBackToBooks = () => {
    navigate('/Books');
  };

  return (
    <div className='main'>
      <div className="form-container mb-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              className="form-control"
              name="bookname"
              value={data.bookname}
              onChange={handleInputChange}
              placeholder="Enter book name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Author Name</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={data.author}
              onChange={handleInputChange}
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={data.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={data.image}
              onChange={handleInputChange}
              placeholder="Enter the URL of the image"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={data.price}
              onChange={handleInputChange}
              placeholder="Enter the price of the book"
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
            <button
              type="button"
              onClick={handleBackToBooks}
              className="btn btn-secondary"
              style={{ marginLeft: 'auto' }}
            >
              Back to Books
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
