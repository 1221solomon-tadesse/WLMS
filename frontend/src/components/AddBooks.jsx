import React, { useState } from 'react'
import '../styles/AddBook.css'
import axios from 'axios'

const AddBooks = ({currrent_user}) => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

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
  }

  return (
    currrent_user==='admin'?
    <div className='main'>
      <div className="form-container mb-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Book Name</label>
            <input type="text" className="form-control" name="bookname" value={data.bookname} onChange={handleInputChange} placeholder="Enter book name" />
          </div>
          <div className="form-group">
            <label className="form-label">Author Name</label>
            <input type="text" className="form-control" name="author" value={data.author} onChange={handleInputChange} placeholder="Enter author name" />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" name="description" value={data.description} onChange={handleInputChange} placeholder="Enter description" />
          </div>
          <div className="form-group">
            <label className="form-label">Image</label>
            <input type="text" className="form-control" name="image" value={data.image} onChange={handleInputChange} placeholder="Enter the url of the image" />
          </div>
          <div className="form-group">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" name="price" value={data.price} onChange={handleInputChange} placeholder="Enter the price of the book" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Save</button>
        </form>
      </div>
    </div>:<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}> <div style={{ textDecoration: 'none', borderRadius: '0.25rem', backgroundColor: '#3A9DAB', color: '#fff', padding: '0.5rem 1rem', }}> <h>you are not authorized</h> </div> </div>
  )
}

export default AddBooks