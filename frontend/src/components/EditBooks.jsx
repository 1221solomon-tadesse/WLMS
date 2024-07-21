import React, { useState, useEffect } from 'react'
import '../styles/AddBooks.css'
import axios from 'axios'

const EditBooks = ({ match }) => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/getBooks/${match.params.id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [match.params.id]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:1000/api/v1/updateBooks/${match.params.id}`, data);
      alert("Book updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating book!");
    }
  }

  return (
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
          <button type="submit" className="btn btn-primary mt-3">Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditBooks